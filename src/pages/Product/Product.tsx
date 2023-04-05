import React, { FC } from "react";
import styles from './product.module.scss';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import { IProduct } from "../../types/IProduct";

interface IProductProp {
	product: IProduct
}

const Product: FC<IProductProp> = ({ product }) => {
	const { title, typeSize, size } = product;

	return (
		<div className={styles.content}>
			Карточка Товара!
			<p className={styles.path}>{`Главная / Каталог / ${title}`}</p>
			<div className={styles.container}>
				<img src="#" alt="Изображение товара" />
				<div className={styles.info}>
					<span className={styles.in_stock}>В наличии</span>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.size}>
						<img className={styles.icon} src={typeSize === 'г' ? grams : milliliters} alt="Тип" />
						<span className={styles.count}>{size}</span>
						<span>{typeSize}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;