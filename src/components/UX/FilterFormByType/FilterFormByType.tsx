import { FC } from 'react';
import cn from 'classnames';
import styles from './filter-form-by-type.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { toggleCurrentSubtype, toggleCurrentType } from '../../../store/goodSlice';

const FilterFormByType: FC = () => {
	const dispatch = useAppDispatch();
	const { subtypeByTypeList, form: { currentType, currentSubtype } } = useAppSelector(state => state.goodReducer)

	return (
		<div className={styles.content}>
			{subtypeByTypeList.map(({ type, subtypes }) => (
				<div className={styles.container} key={type}>
					<h5
						className={currentType === type ? cn(styles.title, styles.active) : styles.title}
						onClick={() => dispatch(toggleCurrentType(type))}
					>
						{type}
					</h5>
					<ul>
						{currentType === type && subtypes.map((subtype) => (
							<li
								className={currentSubtype === subtype ? cn(styles.subtype, styles.active) : styles.subtype}
								onClick={() => dispatch(toggleCurrentSubtype(subtype))}
							>
								{subtype}
							</li>

						))}
					</ul>
					<div className={styles.border}></div>
				</div>
			))}
		</div>
	)
}

export default FilterFormByType;
