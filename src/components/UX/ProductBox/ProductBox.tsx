import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './product-box.module.scss';

import { useAppDispatch } from '../../../hooks';
import { changeProductToCartCount } from '../../../store/goodSlice';
import Button from '../Button/Button';
import { IProduct } from '../../../interfaces';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import cartIcon from './assets/cart-icon.svg';

interface IProductBoxProps {
	product: IProduct,
}


const ProductBox: FC<IProductBoxProps> = ({ product }) => {
	const dispatch = useAppDispatch();

	const {
		id,
		imgUrl,
		title,
		typeSize,
		size,
		barcode,
		manufacturer,
		brand,
		price
	} = product;

	const clickHandler = () => {

		dispatch(changeProductToCartCount({
			product,
			count: 1,
			price: Number(price)
		}));
	}

	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<div className={styles.product_img}>
					<img src={imgUrl} alt="Товар" />
				</div>
				<div className={styles.info}>
					<div className={styles.size}>
						<img
							className={styles.icon}
							src={typeSize === 'г' ? grams : milliliters}
							alt="Тип"
						/>
						<span className={styles.count}>{size}</span>
						<span>{typeSize}</span>
					</div>
					<Link
						className={styles.title}
						to={`/sultan-online-store/product/${id}`}
					>
						{title}
					</Link>
					<span
						className={styles.feature_title}
					>
						Штрихкод:
						<span
							className={styles.feature_data}
						>
							{barcode}
						</span>
					</span>
					<span
						className={styles.feature_title}
					>
						Производитель:
						<span
							className={styles.feature_data}
						>
							{manufacturer}
						</span>
					</span>
					<span
						className={styles.feature_title}
					>
						Бренд:
						<span
							className={styles.feature_data}
						>
							{brand}
						</span>
					</span>
					<div className={styles.price_and_button}>
						<span className={styles.price}>{`${price} ₽`}</span>
						<div onClick={clickHandler}>
							<Button
								text={'В корзину'}
								icon={cartIcon}
								size={'mini'}
							/>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default ProductBox;
