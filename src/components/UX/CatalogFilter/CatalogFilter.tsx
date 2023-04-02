import { FC } from "react";
import FilterFormByPrice from "../FilterFormByPrice/FilterFormByPrice";
import FilterFormByManufacturer from "../FilterFormByManufacturer/FilterFormByManufacturer";
import styles from './catalog-filter.module.scss';



const CatalogFilter: FC = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Подбор по параметрам</h3>
			<FilterFormByPrice />
			<FilterFormByManufacturer />
		</div>
	)
}

export default CatalogFilter;