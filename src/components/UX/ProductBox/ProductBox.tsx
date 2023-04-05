import { FC } from "react";
import { IProduct } from "../../../types/IProduct";
import styles from './product-box.module.scss';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import cartIcon from './assets/cart-icon.svg';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

interface IProductBoxProps {
	product: IProduct,
}

const ProductBox: FC<IProductBoxProps> = ({ product }) => {
	const {
		id,
		imgUrl,
		title,
		typeSize,
		size,
		barcode,
		manufacturer,
		brand,
		price
	} = product;

	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<div className={styles.product_img}>
					<img src={imgUrl} alt="Товар" />
				</div>
				<div className={styles.info}>
					<div className={styles.size}>
						<img className={styles.icon} src={typeSize === 'г' ? grams : milliliters} alt="Тип" />
						<span className={styles.count}>{size}</span>
						<span>{typeSize}</span>
					</div>
					<Link className={styles.title} to={`/product/${id}`}>{title}</Link>
					<span className={styles.feature_title}>Штрихкод: <span className={styles.feature_data}>{barcode}</span></span>
					<span className={styles.feature_title}>Производитель: <span className={styles.feature_data}>{manufacturer}</span></span>
					<span className={styles.feature_title}>Бренд: <span className={styles.feature_data}>{brand}</span></span>
					<div className={styles.price_and_button}>
						<span className={styles.price}>{`${price} ₽`}</span>
						<Button text={'В корзину'} icon={cartIcon} size={'mini'} />
					</div>

				</div>
			</div>
		</div>
	)
}

export default ProductBox;