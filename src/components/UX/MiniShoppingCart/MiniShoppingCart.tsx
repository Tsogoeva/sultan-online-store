import { FC } from "react";
import styles from './mini-shopping-cart.module.scss';

import cartImg from './assets/mini-shopping-cart-icon.svg';
import { useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router";

const MiniShoppingCart: FC = () => {
	const navigate = useNavigate();
	const { cart } = useAppSelector(state => state.goodReducer);
	const totalCount = cart.reduce((sum, productData) => sum + productData.count, 0);

	const clickHandler = () => {
		navigate('/sultan-online-store/cart');
	}

	return (
		<div className={styles.container} onClick={clickHandler}>
			<div className={styles.cart}>
				<img src={cartImg} alt="Корзина" />
				<div className={styles.count}>{totalCount}</div>
			</div>
		</div >
	)
}

export default MiniShoppingCart;