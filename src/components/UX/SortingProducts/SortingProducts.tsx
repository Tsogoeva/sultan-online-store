import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { setCurrentSorting } from '../../../store/goodSlice';
import styles from './sorting-products.module.scss';


const SortingProducts: FC = () => {
	const dispatch = useAppDispatch();
	const [currentValue, setCurrentValue] = useState('default');

	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setCurrentValue(e.target.value);
		dispatch(setCurrentSorting(e.target.value));
	};

	return (
		<div className={styles.container}>
			<span className={styles.title}>{'Сортировка: '}</span>
			<select className={styles.select} value={currentValue} onChange={changeHandler} >
				<option value="default">{'Выбрать тип сортировки'}</option>
				<option value="sortByPriceUp">{'Сначала дешёвые'}</option>
				<option value="sortByPriceDown">{'Cначала дорогие'}</option>
				<option value="sortByNameAbc">{'Названия от А до Я'}</option>
				<option value="sortByNameCba">{'Названия от Я до А'}</option>
			</select>
		</div>
	)
}

export default SortingProducts;
