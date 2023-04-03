import React, { FC, useState } from "react";
import styles from './filter-form-by-manufacturer.module.scss';

import { useAppSelector } from "../../../hooks";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";

import icon from './assets/search-icon.svg';
import show from './assets/show-icon.svg';
import Input from "../Input/Input";

export interface IManufacturer {
	manufacturer: string[]
}

export interface ICheckboxProps {
	value: string;
	register: UseFormRegister<IManufacturer>
}


const Checkbox: FC<ICheckboxProps> = ({ value, register }) => {
	const [checked, setChecked] = useState(false);

	console.log(checked)

	return (
		<div className={styles.checkbox_container} onChange={() => setChecked(!checked)}>

			<input className={styles.checkbox} type="checkbox" checked={checked} value={value} {...register('manufacturer')} />
			<label htmlFor={value} className={styles.label}>{value}</label>

		</div>
	);
}



const FilterFormByManufacturer: FC = () => {
	const { manufacturers } = useAppSelector(state => state.goodReducer)
	const { register, handleSubmit } = useForm<IManufacturer>();

	const onSubmit: SubmitHandler<IManufacturer> = (data) => {
		console.log(data)
	}

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<div className={styles.container} onChange={handleSubmit(onSubmit)}>
			<h4 className={styles.title}>Производитель</h4>
			<Input placeholder={'Поиск...'} icon={icon} size={'mini'} />
			<form className={styles.form}>
				{manufacturers.map((manufacturer) => {
					return (
						<Checkbox key={manufacturer} register={register} value={manufacturer} />
					)
				})}
			</form>

			<div className={styles.show}>
				{'Показать всё'}
				<img src={show} alt="Показать всё" />
			</div>
			<div className={styles.border_buttom}></div>
		</div>
	)
}

export default FilterFormByManufacturer;