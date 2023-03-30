import React, { FC } from "react";
import styles from './header.module.scss';
import iconAddress from './assets/icon-address.svg';
import iconImail from './assets/icon-email.svg';

import Logo from "../UI/LogoDark/LogoDark";

import Button from "../UX/Button/Button";
import buttonCatalogIcon from './assets/catalog-button-icon.svg';
import buttonDownloadIcon from './assets/download-button-icon.svg';

import Input from "../UX/Input/Input";
import searchIcon from './assets/search-icon.svg';

import operatorImg from './assets/operator.svg';

import ShoppingCart from "../UX/ShoppingCart/ShoppingCart";


const Header: FC = () => {
	const data = {
		catalog: 'Каталог',
		download: 'Прайс-лист',
		placeholder: 'Поиск...'
	}


	const {
		header,
		border_container_top,
		container_top,
		info,
		address,
		address_icon,
		address_info,
		address_details,
		email,
		email_icon,
		email_info,
		email_details,
		navBar,
		navBar_item,
		navBar_item_last,
		border_container_options,
		container_options,
		short_info,
		info_text,
		phone_number,
		time,
		order,
		operator,
		online,
		border
	} = styles;

	return (
		<header className={header}>
			<div className={border_container_top}>
				<div className={container_top}>
					<div className={info}>
						<div className={address}>
							<img className={address_icon} src={iconAddress} alt="Icon" />
							<p className={address_info}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
							<p className={address_details}>(Рынок Восточный)</p>
						</div>
						<div className={email}>
							<img className={email_icon} src={iconImail} alt="Icon" />
							<p className={email_info}>opt.sultan@mail.ru</p>
							<p className={email_details}>На связи в любое время</p>
						</div>
					</div>
					<div className={navBar}>
						<span className={navBar_item}>О компании</span>
						<span className={navBar_item}>Доставка и оплата</span>
						<span className={navBar_item}>Возврат</span>
						<span className={navBar_item_last}>Контакты</span>
					</div>
				</div>
			</div>
			<div className={border_container_options}>
				<div className={container_options}>
					<Logo />
					<Button text={data.catalog} icon={buttonCatalogIcon} />
					<Input placeholder={data.placeholder} icon={searchIcon} />
					<div className={short_info}>
						<div className={info_text}>
							<p className={phone_number}>+7 (777) 490-00-91</p>
							<p className={time}>время работы: 9:00-20:00</p>
							<p className={order}>Заказать звонок</p>
						</div>
						<div className={operator}>
							<img src={operatorImg} alt="Оператор" />
							<div className={online}></div>
						</div>
					</div>
					<div className={border}>
						<Button text={data.download} icon={buttonDownloadIcon} />

					</div>
					<ShoppingCart />
				</div>
			</div>

		</header>
	)
}

export default Header;