import { FC } from "react";
import styles from './button.module.scss';

interface IButtonProps {
	text: string;
	icon: string;
	size: string
}

const Button: FC<IButtonProps> = ({ text, icon, size }) => {

	const currentSize = size === 'big' ? styles.big_size : styles.mini_size;

	return (
		<div className={styles.container}>
			<button className={currentSize} type="button">
				{text}
				<img src={icon} alt="Иконка" />
			</button>
		</div>
	)
}

export default Button;