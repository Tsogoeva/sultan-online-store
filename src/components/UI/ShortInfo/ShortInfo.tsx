import { FC } from 'react';
import cn from 'classnames';
import styles from './short-info.module.scss';

interface IShortInfoProps {
	color: string;
}

const ShortInfo: FC<IShortInfoProps> = ({ color }) => {
	const {
		info_text,
		phone_number,
		time,
		order,
		text_color_dark,
		text_color_white,
		text_align_right,
		text_align_left
	} = styles;

	return (
		<div className={color === 'header' ? cn(info_text, text_align_right) : cn(info_text, text_align_left)}>
			<p className={phone_number}>+7 (777) 490-00-91</p>
			<p className={color === 'header' ? cn(time, text_color_dark) : cn(time, text_color_white)}>время работы: 9:00-20:00</p>
			<p className={color === 'header' ? cn(order, text_color_dark) : cn(order, text_color_white)}>Заказать звонок</p>
		</div>
	)
}

export default ShortInfo;
