import { FC } from "react";
import styles from './sorting-type-product.module.scss';

import { useAppSelector } from "../../../hooks";

const SortingTypeProduct: FC = () => {
	const anotherTypes = [
		'Освежители воздуха',
		'Средства по уходу за обувью',
		'Средсва для мытья полов',
		'Средства для мытья стёкол',
		'Чистящие средства для труб'
	];

	const { types } = useAppSelector(state => state.goodReducer)

	return (
		<div className={styles.container}>
			<div className={styles.sorting_type_product}>
				{types.map((type) => <div key={type} className={styles.type}>{type}</div>)}
			</div>
			<div className={styles.sorting_type_product}>
				{anotherTypes.map((type) => <div key={type} className={styles.type}>{type}</div>)}
			</div>
		</div>
	)
}

export default SortingTypeProduct;