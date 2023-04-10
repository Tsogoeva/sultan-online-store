import { FC } from 'react';
import styles from './input.module.scss';

interface IInputProps {
	placeholder: string;
	icon: string;
}

const Input: FC<IInputProps> = ({ placeholder, icon }) => {

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				placeholder={placeholder}
			/>
			<button className={styles.button} type="submit">
				<img className={styles.icon} src={icon} alt="Иконка" />
			</button>
		</div>
	)
}

export default Input;
