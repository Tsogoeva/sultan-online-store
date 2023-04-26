import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './from-card-to-cart-button.module.scss';

import cartIcon from './assets/mini-cart-icon.svg';


const FromCardToCartButton: FC = () => {

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

export default FromCardToCartButton;
