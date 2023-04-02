import { FC } from "react";
import styles from './sorting-type-product.module.scss';

import { useAppSelector } from "../../../hooks";

const SortingTypeProduct: FC = () => {
	const { types } = useAppSelector(state => state.goodReducer)

	return (
		<div className={styles.sorting_type_product}>
			{types.map((type) => <div key={type} className={styles.type}>{type}</div>)}
		</div>
	)
}

export default SortingTypeProduct;