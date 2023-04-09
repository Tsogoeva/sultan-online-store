import { FC } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';

interface IInputProps {
	placeholder: string;
	icon: string;
	size: string;
}

const Input: FC<IInputProps> = ({ placeholder, icon, size }) => {
	const currentSize = size === 'big' ? styles.big_size : styles.mini_size;

	return (
		<div className={cn(styles.container, currentSize)}>
			<input
				className={cn(styles.input, currentSize)}
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
