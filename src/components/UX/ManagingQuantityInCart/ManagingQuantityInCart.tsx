import { FC, useState } from 'react';
import styles from './managing-quantity-in.cart.module.scss';


const ManagingQuantityInCart: FC = () => {
	const [count, setCount] = useState(1);

	const incrementHandler = () => {
		setCount(count + 1);
	}

	const decrementHandler = () => {
		if (count === 0) {
			setCount(count);
		} else {
			setCount(count - 1);
		}
	}

	return (
		<div className={styles.container}>
			<button className={styles.changing} onClick={decrementHandler}>{'-'}</button>
			<div className={styles.count}>{count}</div>
			<button className={styles.changing} onClick={incrementHandler}>{'+'}</button>
		</div>
	)
}

export default ManagingQuantityInCart;
