import { FC } from "react";
import { IProduct } from "../../../types/IProduct";
import styles from './product-box.module.scss';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import cartIcon from './assets/cart-icon.svg';
import Button from "../Button/Button";

// import image1 from './assets/assetsDb/image1.png';
// import image2 from './assets/assetsDb/image2.png';
// import image3 from './assets/assetsDb/image3.png';
// import image4 from './assets/assetsDb/image4.png';
// import image5 from './assets/assetsDb/image5.png';
// import image6 from './assets//assetsDb/image6.png';


interface IProductBoxProps {
	product: IProduct,
}

const ProductBox: FC<IProductBoxProps> = ({ product }) => {
	const {
		imgUrl,
		title,
		// type,
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
					<h4 className={styles.title}>{title}</h4>
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