import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { removeProductFromGoods } from "../../../store/goodSlice";
import { IProduct } from "../../../types/IProduct";
import ProductNotFound from "../ProductNotFound/ProductNotFound";
import styles from './product-removal.module.scss';

interface IConfirmationProps {
	removeClick: React.Dispatch<React.SetStateAction<boolean>>,
	cancelClick: () => void
}

const ConfirmationProductRemoval: FC<IConfirmationProps> = ({ removeClick, cancelClick }) => {

	const confirmClick = () => {
		removeClick(true);
	}

	return (
		<div className={styles.confirmation_container}>
			<h4
				className={styles.confirmation_info}
			>
				Вы подтверждаете удаление товара?
			</h4>
			<button
				className={styles.confirmation_btn}
				onClick={confirmClick}
			>
				Да, удалить товар.
			</button>
			<button
				className={styles.confirmation_btn}
				onClick={cancelClick}
			>
				Отменить удаление.
			</button>
		</div>
	)
}


const ProductRemoval: FC = () => {
	const dispatch = useAppDispatch();
	const { goods } = useAppSelector(state => state.goodReducer);
	const [searchedProduct, setSearchedProduct] = useState('');
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>();
	const [confirmRemovalProduct, setConfirmRemovalProduct] = useState(false)
	const [removeProduct, setRemoveProduct] = useState(false);
	const [currentProductNotFound, setCurrentProductNotFound] = useState(false);

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		setCurrentProduct(goods.find((product) => product.barcode === searchedProduct));

		if (!currentProduct) {
			setCurrentProductNotFound(true);
			setConfirmRemovalProduct(false);
		} else {
			setConfirmRemovalProduct(true);
		}
	}

	const cancelRemoval = () => {
		setSearchedProduct('');
		setCurrentProduct(null)
		setConfirmRemovalProduct(false);
	}

	useEffect(() => {
		if (currentProduct) {
			dispatch(removeProductFromGoods(currentProduct.id));

			setSearchedProduct('');
			setConfirmRemovalProduct(false);
			setRemoveProduct(false);
			setCurrentProduct(null)
		}

	}, [removeProduct])

	useEffect(() => {
		if (currentProduct) {
			setCurrentProductNotFound(false);
			setConfirmRemovalProduct(true);
		}

	}, [currentProduct])

	console.log({ goods })
	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<h2 className={styles.title}>Удалить товар</h2>
				<form className={styles.form} onSubmit={submitHandler}>
					<div className={styles.input_container}>
						<label
							className={styles.label}
							htmlFor="barcode"
						>
							Введите штрихкод товара
						</label>
						<input
							required
							className={styles.input}
							value={searchedProduct}
							onChange={(e) => setSearchedProduct(e.target.value)}
							name="barcode"
							type="text"
						/>
						<button className={styles.submit} type="submit">Удалить</button>
					</div>
				</form>
				{currentProduct
					&& confirmRemovalProduct
					&& <ConfirmationProductRemoval
						removeClick={setRemoveProduct}
						cancelClick={cancelRemoval}
					/>
				}
				{currentProductNotFound
					&& <ProductNotFound />
				}
			</div>
		</div>
	)
}

export default ProductRemoval;
