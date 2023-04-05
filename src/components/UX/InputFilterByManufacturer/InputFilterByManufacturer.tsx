import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { runFilterByManufacturerForInput } from "../../../store/goodSlice";
import styles from './input-filter-by-manufacturer.module.scss';

interface IInputProps {
	placeholder: string;
	icon: string;
}

const InputFilterByManufacturer: FC<IInputProps> = ({ placeholder, icon }) => {
	const [name, setName] = useState<string>('');
	const dispatch = useAppDispatch();

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(runFilterByManufacturerForInput(name));
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setName(value);
	}


	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={submitHandler}>
				<input className={styles.input} type="text" onChange={changeHandler} value={name} placeholder={placeholder} />
				<button className={styles.button} type="submit">
					<img className={styles.icon} src={icon} alt="Иконка" />
				</button>
			</form>
		</div>
	)
}

export default InputFilterByManufacturer;
