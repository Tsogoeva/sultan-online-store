import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStateModal } from '../../store/goodSlice';
import CardCart from '../../components/UX/CardCart/CardCart';


const Cart: FC = () => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector(state => state.goodReducer);

	const totalAmount = cart.reduce((sum, productData) => sum + productData.price, 0);

	const [isOpenedModal, toggleModalState] = useState(false);

	const submitHandler = () => {
		if (cart.length) {
			dispatch(changeStateModal(isOpenedModal));
			toggleModalState(!isOpenedModal);
		}
	}

	return (
		<div data-testid={'shopping-cart-page'} className={styles.container}>
			<div className={styles.content}>
				<div className={styles.path_and_back}>
					<p className={styles.path}>{`Главная / Корзина`}</p>
					<Link to={'/sultan-online-store/'}>
						<button type="button" className={styles.back}>
							{'Вернуться назад в каталог'}
						</button>
					</Link>
				</div>
				<h2 className={styles.title}>Корзина</h2>
				<div className={styles.product_container}>
					{cart.length
						? cart.map((cartItem) => <CardCart
							key={cartItem.product.id}
							cartItem={cartItem}
						/>)
						:
						<div className={styles.empty}>
							<h3 className={styles.empty_title}>Корзина пуста!</h3>
						</div>}
				</div>

				<div className={styles.place_order_container}>
					<button
						data-testid={'order-btn'}
						type="button"
						onClick={submitHandler}
						className={styles.order_button}
					>
						Оформить заказ
					</button>
					<div
						className={styles.total_order_amount}
					>
						{`${totalAmount} ₽`}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart;
