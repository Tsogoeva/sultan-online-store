import React, { FC } from 'react';
import styles from './product-catalog.module.scss';

import SortingProducts from '../../components/UX/SortingProducts/SortingProducts';
import FilterTypeProductHeader from '../../components/UX/FilterTypeProductHeader/FilterTypeProductHeader';
import CatalogFilter from '../../components/UX/CatalogFilter/CatalogFilter';
import ProductTable from '../../components/UX/ProductTable/ProductTable';

const ProductCatalog: FC = () => {
	return (
		<div className={styles.product_catalog}>
			<div className={styles.content}>
				<span className={styles.path}>Главная / Бытовая химия</span>
				<div className={styles.sorting}>
					<h2 className={styles.category}>Бытовая химия</h2>
					<SortingProducts />
				</div>
				<FilterTypeProductHeader />
				<div className={styles.container_filtering_and_table}>
					<CatalogFilter />
					<ProductTable />
				</div>

			</div>
		</div>
	)
}

export default ProductCatalog;