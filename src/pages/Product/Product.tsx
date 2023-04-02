import React, { FC } from "react";
import styles from './product.module.scss';

const Product: FC = () => {
	return (
		<div className={styles.product}>
			Карточка товара!
		</div>
	)
}

export default Product;