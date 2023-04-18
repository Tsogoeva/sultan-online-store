import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStateModal, removeProductFromCart } from '../../store/goodSlice';
import ManagingQuantityInCart from '../../components/UX/ManagingQuantityInCart/ManagingQuantityInCart';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import removeIcon from './assets/remove-icon.svg';


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
					{cart.length ? cart.map((cartItem) => {
						const findedProductInCart = cart
							.find((content) => content.product.id === cartItem.product.id);
						const formatedTitle = cartItem.product.title.length > 40
							? cartItem.product.title.slice(0, 40) + '...'
							: cartItem.product.title;

						const removeHandler = () => {
							dispatch(removeProductFromCart(cartItem.product.id));
						}

						return (
							<div key={cartItem.product.id} className={styles.product}>
								<div className={styles.info}>
									<img
										className={styles.image}
										src={cartItem.product.imgUrl}
										alt="Изображение товара"
									/>
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

										<ManagingQuantityInCart
											product={cartItem.product}
											alreadyAddedCount={findedProductInCart ? findedProductInCart.count : 0}
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
					}) : <div className={styles.empty}>
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
