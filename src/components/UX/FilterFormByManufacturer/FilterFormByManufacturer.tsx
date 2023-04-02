import { FC, useState } from "react";
import styles from './filter-form-by-manufacturer.module.scss';

import { useAppSelector } from "../../../hooks";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IManufacturer {
	manufacturer: string[]
}

const FilterFormByManufacturer: FC = () => {
	const { manufacturers } = useAppSelector(state => state.goodReducer)
	const { register, handleSubmit } = useForm<IManufacturer>();
	const [isChecked, setChecked] = useState(false);

	const onSubmit: SubmitHandler<IManufacturer> = (data) => {
		console.log(data)
	}
	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form className={styles.form} onChange={handleSubmit(onSubmit)}>
			<h4>Производитель</h4>
			<input />
			{manufacturers.map((manufacturer) => {
				return (
					<label key={manufacturer}>
						<div>
							<input type="checkbox" onClick={() => setChecked(!isChecked)} value={manufacturer} placeholder={manufacturer} {...register('manufacturer')} />
							{manufacturer}
						</div>
					</label>
				)
			})}

			{/* {types.map((type) => <div key={type} className={styles.type}>{type}</div>)} */}
		</form>
	)
}

export default FilterFormByManufacturer;