import { FC } from "react";
import cn from 'classnames';
import styles from './filter-type-product-header.module.scss';

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { toggleCurrentType } from "../../../store/goodSlice";

const FilterTypeProductHeader: FC = () => {
	const dispatch = useAppDispatch();
	const { subtypeByTypeList, form: { currentType } } = useAppSelector(state => state.goodReducer)

	return (
		<div className={styles.container}>
			<div className={styles.sorting_type_product}>
				{subtypeByTypeList.map(({ type }) => <div
					key={type}
					className={currentType === type ? cn(styles.type, styles.active) : styles.type}
					onClick={() => dispatch(toggleCurrentType(type))}
				>
					{type}
				</div>
				)}
			</div>
		</div>
	)
}

export default FilterTypeProductHeader;
