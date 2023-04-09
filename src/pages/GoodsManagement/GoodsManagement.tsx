import { FC } from 'react';
import { useNavigate } from 'react-router';
import styles from './goods-management.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchData } from '../../store/actionCreators';
import AddingNewProduct from '../../components/AdminAreaComponents/AddingNewProduct/AddingNewProduct';
import ProductDataChange from '../../components/AdminAreaComponents/ProductDataChange/ProductDataChange';
import ProductRemoval from '../../components/AdminAreaComponents/ProductRemoval/ProductRemoval';


const GoodsManagement: FC = () => {
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
		<div className={styles.content}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Управление товарами</h2>
					<div className={styles.back} onClick={clickHandler}>Вернуться в каталог</div>
				</div>
				<div className={styles.panels}>
					<AddingNewProduct />
					<ProductDataChange />
					<ProductRemoval />
				</div>
			</div>

		</div>
	)
}

export default GoodsManagement;
