import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './button-to-cart-from-product.module.scss';

import cartIcon from './assets/mini-cart-icon.svg';


const ButtonToCartFromProduct: FC = () => {

	return (
		<div className={styles.container}>
			<Link to={'/sultan-online-store/cart'}>
				<button type="button">
					{'В корзину'}
					<img src={cartIcon} alt="Иконка" />
				</button>
			</Link>

		</div>
	)
}

export default ButtonToCartFromProduct;
