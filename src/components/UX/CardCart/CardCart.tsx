import { FC } from 'react';
import styles from './card-cart.module.scss';

import { ICart } from '../../../interfaces';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { removeProductFromCart } from '../../../store/goodSlice';
import GoodsInCartCounter from '../GoodsInCartCounter/GoodsInCartCounter';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import removeIcon from './assets/remove-icon.svg';


interface ICardCartProps {
	cartItem: ICart
}

const CardCart: FC<ICardCartProps> = ({ cartItem }) => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector(state => state.goodReducer);

	const foundProductInCart = cart
		.find((current) => current.product.id === cartItem.product.id);

	const formatedTitle = cartItem.product.title.length > 40
		? cartItem.product.title.slice(0, 40) + '...'
		: cartItem.product.title;

	const removeHandler = () => {
		dispatch(removeProductFromCart(cartItem.product.id));
	}

	return (
		<div className={styles.product}>
			<div className={styles.info}>
				<div className={styles.image}>
					<img
						src={cartItem.product.imgUrl}
						alt="Изображение товара"
					/>
				</div>
				<div className={styles.text}>
					<div className={styles.size}>
						<img
							className={styles.icon}
							src={cartItem.product.typeSize === 'г' ? grams : milliliters}
							alt="Тип"
						/>
						<span className={styles.count}>{cartItem.product.size}</span>
						<span>{cartItem.product.typeSize}</span>
					</div>
					<div className={styles.description_block}>
						<h5
							className={styles.title_product}
						>
							{formatedTitle}
						</h5>
						<p
							className={styles.description}
						>
							{cartItem.product.description}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.managing}>
				<div className={styles.border_manage}>

					<GoodsInCartCounter
						product={cartItem.product}
						alreadyAddedCount={foundProductInCart ? foundProductInCart.count : 0}
					/>
				</div>
				<div className={styles.sum_product}>
					{`${cartItem.price} ₽`}
				</div>
				<button
					type="button"
					onClick={removeHandler}
					className={styles.remove_button}
				>
					<img src={removeIcon} alt="Удалить из корзины" />
				</button>
			</div>
		</div>
	)
}

export default CardCart;