import { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './catalog-product.module.scss';

import SortingProducts from '../../components/CatalogProductComponents/SortingProducts/SortingProducts';
import FilterTypeProductHeader from '../../components/CatalogProductComponents/FilterTypeProductHeader/FilterTypeProductHeader';
import FilterCatalog from '../../components/CatalogProductComponents/FilterCatalog/FilterCatalog';
import TableProduct from '../../components/CatalogProductComponents/TableProduct/TableProduct';


const CatalogProduct: FC = () => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate('/sultan-online-store/management');
	}

	return (
		<div data-testid={'main-page'} className={styles.flex}>
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
					<FilterCatalog />
					<TableProduct />
				</div>

			</div>
		</div>
	)
}

export default CatalogProduct;
