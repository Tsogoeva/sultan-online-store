import React, { FC } from "react";
import styles from './product-catalog.module.scss';

import CatalogFilter from "../../components/UX/CatalogFilter/CatalogFilter";
import ProductTable from "../../components/UX/ProductTable/ProductTable";
import SortingProducts from "../../components/UX/SortingProducts/SortingProducts";
import SortingTypeProduct from "../../components/UX/SortingTypeProduct/SortingTypeProduct";

const ProductCatalog: FC = () => {
	return (
		<div className={styles.product_catalog}>
			<div className={styles.content}>
				<span className={styles.path}>Главная / Моющие средства</span>
				<div className={styles.sorting}>
					<h2 className={styles.category}>Моющие средства</h2>
					<SortingProducts />
				</div>
				<SortingTypeProduct />
				<div className={styles.container_filtering_and_table}>
					<CatalogFilter />
					<ProductTable />
				</div>

			</div>
		</div>
	)
}

export default ProductCatalog;