import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeProductToCartCount, removeProductFromCart } from '../../../store/goodSlice';
import { IProduct } from '../../../types/IProduct';
import styles from './managing-quantity-in.cart.module.scss';

interface IManagingQuantityInCartProps {
	product: IProduct,
	alreadyAddedCount: number
}

const ManagingQuantityInCart: FC<IManagingQuantityInCartProps> = ({ product, alreadyAddedCount }) => {
	const dispatch = useAppDispatch();
	let count = alreadyAddedCount;

	const incrementHandler = () => {
		count += 1;
		dispatch(changeProductToCartCount({ product, count, price: Number(product.price) * count }));
	}

	const decrementHandler = () => {
		if (count === 1) {
			count = 0;
			dispatch(removeProductFromCart(product.id));
		} else {
			count -= 1;
			dispatch(changeProductToCartCount({ product, count, price: Number(product.price) * count }))
		}
	}

	const { cart } = useAppSelector(state => state.goodReducer);
	console.log({ cart })

	return (
		<div className={styles.container}>
			<button className={styles.changing} onClick={decrementHandler}>{'-'}</button>
			<div className={styles.count}>{count}</div>
			<button className={styles.changing} onClick={incrementHandler}>{'+'}</button>
		</div>
	)
}

export default ManagingQuantityInCart;
