import { FC } from "react";
import { useNavigate } from "react-router";
import AddingNewProduct from "../../components/UX/AddingNewProduct/AddingNewProduct";
import styles from './goods-management.module.scss';


const GoodsManagement: FC = () => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate('/sultan-online-store');
	}

	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Управление товарами</h2>
					<div className={styles.back} onClick={clickHandler}>Вернуться в каталог</div>
				</div>
				<div className={styles.panels}>
					<AddingNewProduct />
				</div>
			</div>

		</div>
	)
}

export default GoodsManagement;
