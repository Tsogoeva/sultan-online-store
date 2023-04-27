import { FC, useState } from 'react';
import styles from './filter-catalog.module.scss';

import FilterFormByPrice from '../FilterFormByPrice/FilterFormByPrice';
import FilterFormByManufacturer from '../FilterFormByManufacturer/FilterFormByManufacturer';
import FilterFormByType from '../FilterFormByType/FilterFormByType';
import SortingProducts from '../SortingProducts/SortingProducts';


const FilterCatalog: FC = () => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.title}>Подбор по параметрам</h3>
				<button
					className={styles.btn_mobile}
					onClick={() => setShowOptions(!showOptions)}
				>
					{'⌄'}
				</button>
			</div>
			<div className={showOptions ? styles.options_open : styles.options_close}>
				<FilterFormByPrice />
				<FilterFormByManufacturer />
			</div>
			<FilterFormByType />
			<div className={styles.sorting_product}>
				<SortingProducts />
			</div>
		</div>
	)
}

export default FilterCatalog;
