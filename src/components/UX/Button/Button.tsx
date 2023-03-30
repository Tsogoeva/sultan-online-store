import { FC } from "react";
import styles from './button.module.scss';

interface IButtonProps {
	text: string;
	icon: string;
}

const Button: FC<IButtonProps> = ({ text, icon }) => {
	return (
		<div className={styles.container}>
			<button type="button">
				{text}
				<img src={icon} alt="Иконка" />
			</button>
		</div>
	)
}

export default Button;