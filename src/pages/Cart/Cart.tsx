import React, { FC } from "react";
import styles from './cart.module.scss';

const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			Корзина товаров!
		</div>
	)
}

export default Cart;