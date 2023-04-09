import { FC } from 'react';
import styles from './checkbox-for-management.module.scss';


export interface ICheckboxProps {
	name: string,
	isChecked: boolean,
	onClick: (type: string, isChecked: boolean) => void
}

const CheckboxForManagement: FC<ICheckboxProps> = ({ name, isChecked, onClick }) => {

	const clickHandler = () => {
		onClick(name, isChecked);
	}

	return (
		<div className={styles.checkbox_container} onClick={clickHandler} >

			<input readOnly className={styles.checkbox} name={name} type="checkbox" checked={isChecked} />
			<label htmlFor={name} className={styles.label}>{name}</label>

		</div>
	);
}

export default CheckboxForManagement;
