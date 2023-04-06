import { FC } from "react";
import styles from './shopping-cart.module.scss';

import cartImg from './assets/shopping-cart.svg';
import { useAppSelector } from "../../../hooks";

const ShoppingCart: FC = () => {
	const { cart } = useAppSelector(state => state.goodReducer);
	const totalAmount = cart.reduce((sum, productData) => sum + productData.price, 0);
	const totalCount = cart.reduce((sum, productData) => sum + productData.count, 0);

	return (
		<div className={styles.container}>
			<div className={styles.cart}>
				<img src={cartImg} alt="Корзина" />
				<div className={styles.count}>{totalCount}</div>
			</div>
			<div className={styles.amount_container}>
				<p className={styles.title}>Корзина</p>
				<p className={styles.amount}>{`${totalAmount} ₽`}</p>
			</div>
		</div >
	)
}

export default ShoppingCart;