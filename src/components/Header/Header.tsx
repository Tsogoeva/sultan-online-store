import React, { FC } from "react";
import styles from './headerStyle.module.scss';
import iconAddress from './assets/icon-address.svg';
import iconImail from './assets/icon-email.svg';

const Header: FC = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="info">
					<div className="address">
						<img className="address_icon" src={iconAddress} alt="Icon" />
						<p className="address_info">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
						<p className="address_details">(Рынок Восточный)</p>
					</div>
					<div className="email">
						<img className="email_icon" src={iconImail} alt="Icon" />
						<p className="email_info">opt.sultan@mail.ru</p>
						<p className="email_details">На связи в любое время</p>
					</div>
				</div>
				<div className="navBar">
					<span className="navBar_item">О компании</span>
					<span className="navBar_item">Доставка и оплата</span>
					<span className="navBar_item">Возврат</span>
					<span className="navBar_item">Контакты</span>
				</div>
			</div>
		</header>
	)
}

export default Header;