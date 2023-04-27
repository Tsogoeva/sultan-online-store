import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './filter-form-by-price.module.scss';

import { useAppDispatch } from '../../../hooks';
import { runFilterByPrice } from '../../../store/goodSlice';
import { IPriceRange } from '../../../interfaces';


const defaultValues = { min: 0, max: 10000 };

const FilterFormByPrice: FC = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
	} = useForm<IPriceRange>({ defaultValues });

	const onSubmit: SubmitHandler<IPriceRange> = (data) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		dispatch(runFilterByPrice({
			min: data.min || defaultValues.min,
			max: data.max || defaultValues.max,
		}));
	}

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form className={styles.form} onChange={handleSubmit(onSubmit)}>
			<h4 className={styles.form_title}>Цена <b>₽</b></h4>
			<div className={styles.inputs}>
				<input className={styles.input} {...register("min")} placeholder="0" />
				<i>-</i>
				<input className={styles.input} {...register("max")} placeholder="10000" />
			</div>
		</form>
	)
}

export default FilterFormByPrice;
