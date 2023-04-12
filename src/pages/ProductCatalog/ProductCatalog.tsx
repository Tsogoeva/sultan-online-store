import { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './product-catalog.module.scss';

import SortingProducts from '../../components/UX/SortingProducts/SortingProducts';
import FilterTypeProductHeader from '../../components/UX/FilterTypeProductHeader/FilterTypeProductHeader';
import CatalogFilter from '../../components/UX/CatalogFilter/CatalogFilter';
import ProductTable from '../../components/UX/ProductTable/ProductTable';


const ProductCatalog: FC = () => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate('/sultan-online-store/management');
	}

	return (
		<div className={styles.flex}>
			<div className={styles.content}>
				<div className={styles.header}>
					<span
						className={styles.path}
					>
						Главная / Бытовая химия
					</span>
					<div
						className={styles.manage}
						onClick={clickHandler}
					>
						Управление товарами
					</div>
				</div>
				<div className={styles.sorting}>
					<h2
						className={styles.category}
					>
						Бытовая химия
					</h2>
					<div className={styles.sorting_product}>

						<SortingProducts />
					</div>
				</div>
				<div className={styles.filter_type}>
					<FilterTypeProductHeader />

				</div>
				<div className={styles.container_filtering_and_table}>
					<CatalogFilter />
					<ProductTable />
				</div>

			</div>
		</div>
	)
}

export default ProductCatalog;
