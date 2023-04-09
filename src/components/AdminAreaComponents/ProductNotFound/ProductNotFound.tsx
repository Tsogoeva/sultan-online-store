import { FC } from 'react';
import styles from './product-not-found.module.scss';


const ProductNotFound: FC = () => {
	return (
		<div className={styles.not_found_container}>
			<h4
				className={styles.not_found_info}
			>
				Товар по данному штрихкоду не найден!
			</h4>
		</div>
	)
}

export default ProductNotFound;
