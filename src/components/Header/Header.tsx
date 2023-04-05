import React, { FC } from "react";
import styles from './header.module.scss';

import Logo from "../UI/Logo/Logo";
import Button from "../UX/Button/Button";
import Input from "../UX/Input/Input";
import ShortInfo from '../UI/ShortInfo/ShortInfo';
import ShoppingCart from "../UX/ShoppingCart/ShoppingCart";

import iconAddress from './assets/icon-address.svg';
import iconImail from './assets/icon-email.svg';

import buttonCatalogIcon from './assets/catalog-button-icon.svg';
import buttonDownloadIcon from './assets/download-button-icon.svg';

import searchIcon from './assets/search-icon.svg';
import operatorImg from './assets/operator.svg';


const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.border_container_top}>
				<div className={styles.container_top}>
					<div className={styles.info}>
						<div className={styles.address}>
							<img className={styles.address_icon} src={iconAddress} alt="Icon" />
							<p className={styles.address_info}>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
							<p className={styles.address_details}>(Рынок Восточный)</p>
						</div>
						<div className={styles.email}>
							<img className={styles.email_icon} src={iconImail} alt="Icon" />
							<p className={styles.email_info}>opt.sultan@mail.ru</p>
							<p className={styles.email_details}>На связи в любое время</p>
						</div>
					</div>
					<div className={styles.navBar}>
						<span className={styles.navBar_item}>О компании</span>
						<span className={styles.navBar_item}>Доставка и оплата</span>
						<span className={styles.navBar_item}>Возврат</span>
						<span className={styles.navBar_item_last}>Контакты</span>
					</div>
				</div>
			</div>
			<div className={styles.border_container_options}>
				<div className={styles.container_options}>
					<Logo theme={'dark'} />
					<Button text={'Каталог'} icon={buttonCatalogIcon} size={'big'} />
					<Input placeholder={'Поиск...'} icon={searchIcon} size={'big'} />
					<div className={styles.short_info}>
						<ShortInfo color={'header'} />
						<div className={styles.operator}>
							<img src={operatorImg} alt="Оператор" />
							<div className={styles.online}></div>
						</div>
					</div>
					<div className={styles.border}>
						<Button text={'Прайс-лист'} icon={buttonDownloadIcon} size={'big'} />

					</div>
					<ShoppingCart />
				</div>
			</div>

		</header>
	)
}

export default Header;