import { FC, useMemo, useState } from 'react';
import styles from './filter-form-by-manufacturer.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';

import icon from './assets/search-icon.svg';
import { runFilterByManufacturer } from '../../../store/goodSlice';
import InputFilterByManufacturer from '../InputFilterByManufacturer/InputFilterByManufacturer';


export interface ICheckboxProps {
	value: string;
	isChecked: boolean;
}


const Checkbox: FC<ICheckboxProps> = ({ value, isChecked }) => {
	const [checked, toggleChecked] = useState(isChecked);
	const dispatch = useAppDispatch();


	const clickHandler = () => {
		console.log('CLICK')
		console.log({ beforeToggle: checked })
		toggleChecked(!checked);
		console.log({ afterToggle: checked })
		dispatch(runFilterByManufacturer({ name: value, isChecked: !checked }));
	}

	return (
		<div className={styles.checkbox_container} onClick={clickHandler}>

			<input readOnly className={styles.checkbox} name={value} type="checkbox" checked={checked} value={value} />
			<label htmlFor={value} className={styles.label}>{value}</label>

		</div>
	);
}



const FilterFormByManufacturer: FC = () => {
	const { manufacturers } = useAppSelector(state => state.goodReducer);
	const [show, toggleShow] = useState(false);

	let shownManufacturers = manufacturers;

	if (manufacturers.length > 4) {
		shownManufacturers = shownManufacturers.slice(0, 4);
	}

	const clickShowHandler = () => {
		toggleShow(!show);
	}

	useMemo(() => {
		if (show) {
			shownManufacturers = manufacturers;
			console.log(shownManufacturers)
		} else {
			shownManufacturers = shownManufacturers.slice(0, 4);
		}
	}, [shownManufacturers, show])

	return (
		<div className={styles.container}>
			<h4 className={styles.title}>Производитель</h4>
			<InputFilterByManufacturer placeholder={'Поиск...'} icon={icon} />
			<form className={styles.form}>
				{shownManufacturers.map(({ name, isChecked }) => {
					return (
						<Checkbox key={name} value={name} isChecked={isChecked} />
					)
				})}
			</form>

			<div className={styles.show}>
				<span onClick={clickShowHandler} className={show ? styles.open : styles.close}>Показать</span>
			</div>
			<div className={styles.border_buttom}></div>
		</div>
	)
}

export default FilterFormByManufacturer;
