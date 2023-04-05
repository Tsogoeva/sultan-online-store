import { FC } from 'react';
import styles from './button-to-cart-from-product.module.scss';

import cartIcon from './assets/mini-cart-icon.svg';

const ButtonToCartFromProduct: FC = () => {

	return (
		<div className={styles.container}>
			<button type="button">
				{'В корзину'}
				<img src={cartIcon} alt="Иконка" />
			</button>
		</div>
	)
}

export default ButtonToCartFromProduct;
