import { FC } from 'react';
import styles from './mini-pane-cart.module.scss';

import { useAppSelector } from '../../../hooks';
import { useNavigate } from 'react-router';

import cartImg from './assets/mini-shopping-cart-icon.svg';


const MiniPaneCart: FC = () => {
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

export default MiniPaneCart;
