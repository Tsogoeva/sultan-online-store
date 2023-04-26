import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './card-product.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addProductToCart, changeProductToCartCount } from '../../../store/goodSlice';
import Button from '../Button/Button';
import { IProduct } from '../../../interfaces';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import cartIcon from './assets/cart-icon.svg';

interface ICardProps {
	product: IProduct,
}

const CardProduct: FC<ICardProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector(state => state.goodReducer);

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
		const foundProductInCart = cart
			.find((current) => current.product.id === product.id);

		if (foundProductInCart) {
			const count = foundProductInCart.count + 1;
			dispatch(changeProductToCartCount({
				product,
				count: count,
				price: Number(price) * count
			}));
		} else {
			dispatch(addProductToCart({
				product,
				count: 1,
				price: Number(price)
			}));
		}
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
						{'Штрихкод: '}
						<span
							className={styles.feature_data}
						>
							{barcode}
						</span>
					</span>
					<span
						className={styles.feature_title}
					>
						{'Производитель: '}
						<span
							className={styles.feature_data}
						>
							{manufacturer}
						</span>
					</span>
					<span
						className={styles.feature_title}
					>
						{'Бренд: '}
						<span
							className={styles.feature_data}
						>
							{brand}
						</span>
					</span>
					<div className={styles.price_and_button}>
						<span className={styles.price}>{`${price} ₽`}</span>
						<div data-testid={'adding-to-cart'} onClick={clickHandler}>
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

export default CardProduct;
