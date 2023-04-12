import { FC } from 'react';
import styles from './no-such-products.module.scss';


const NoSuchProducts: FC = () => {
	return (
		<div className={styles.not_found_container}>
			<h4
				className={styles.not_found_info}
			>
				Товары по заданным параметрам отсутствуют!
			</h4>
		</div>
	)
}

export default NoSuchProducts;
