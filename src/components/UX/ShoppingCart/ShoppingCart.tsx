import { FC } from "react";
import styles from './shopping-cart.module.scss';

import cartImg from './assets/shopping-cart.svg';

const ShoppingCart: FC = () => {
	const count = 3;
	const amount = '10000';

	return (
		<div className={styles.container}>
			<div className={styles.cart}>
				<img src={cartImg} alt="Корзина" />
				<div className={styles.count}>{count}</div>
			</div>
			<div className={styles.amount_container}>
				<p className={styles.title}>Корзина</p>
				<p className={styles.amount}>{`${amount} ₽`}</p>
			</div>
		</div >
	)
}

export default ShoppingCart;