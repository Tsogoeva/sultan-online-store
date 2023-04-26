import { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './admin-area.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchData } from '../../store/actionCreators';
import AddingNewProduct from '../../components/AdminAreaComponents/AddingNewProduct/AddingNewProduct';
import ChangingProductData from '../../components/AdminAreaComponents/ChangingProductData/ChangingProductData';
import RemovalProduct from '../../components/AdminAreaComponents/RemovalProduct/RemovalProduct';


const AdminArea: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { goods } = useAppSelector(state => state.goodReducer);

	if (!goods.length) {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		dispatch(fetchData());
	}


	const clickHandler = () => {
		navigate('/sultan-online-store');
	}

	return (
		<div className={styles.flex}>
			<div className={styles.content}>
				<div className={styles.container}>
					<div className={styles.header}>
						<h2
							className={styles.title}
						>
							Управление товарами
						</h2>
						<div
							className={styles.back}
							onClick={clickHandler}
						>
							Вернуться в каталог
						</div>
					</div>
					<div className={styles.panels}>
						<AddingNewProduct />
						<ChangingProductData />
						<RemovalProduct />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminArea;
