import React, { FC } from 'react';
import cn from 'classnames';

import styles from './footer.module.scss';

import Logo from '../UI/Logo/Logo';
import Input from '../UX/Input/Input';
import Button from '../UX/Button/Button';
import ShortInfo from '../UI/ShortInfo/ShortInfo';

import emailIcon from './assets/email-icon.svg';
import buttonDownloadIcon from '../Header/assets/download-button-icon.svg';

import whatsappIcon from './assets/whatsapp-icon.svg';
import telegramIcon from './assets/telegram-icon.svg';

import visaLogo from './assets/visa-logo.svg';
import mastercardLogo from './assets/mastercard-logo.svg';


const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>

				<div className={styles.container}>
					<div className={cn(styles.about, styles.text)}>
						<Logo theme={"light"} />
						<p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
						<p className={styles.appeal}>Подпишись на скидки и акции</p>
						<Input placeholder={'Введите ваш E-mail'} icon={emailIcon} size={'big'} />
					</div>
					<div className={cn(styles.text, styles.section_up)}>
						<h3 className={styles.section_title}>Меню сайта:</h3>
						<p className={styles.section_item}>О компании</p>
						<p className={styles.section_item}>Доставка и оплата</p>
						<p className={styles.section_item}>Возврат</p>
						<p className={styles.section_item}>Контакты</p>
					</div>
					<div className={styles.text}>
						<h3 className={styles.section_title}>Категории:</h3>
						<p className={styles.section_item}>Бытовая химия</p>
						<p className={styles.section_item}>Косметика и гигиена</p>
						<p className={styles.section_item}>Товары для дома</p>
						<p className={styles.section_item}>Товары для детей и мам</p>
						<p className={styles.section_item}>Посуда</p>
					</div>
					<div className={styles.section_up}>
						<h3 className={cn(styles.section_title, styles.text)}>Скачать прайс-лист:</h3>
						<Button text={'Прайс-лист'} icon={buttonDownloadIcon} size={'big'} />
						<p className={cn(styles.connection_text, styles.text)}>Связь в мессенджерах:</p>
						<div className={styles.connection_icons}>
							<div className={styles.connection_whatsapp}>
								<img src={whatsappIcon} alt="WhatsApp" />
							</div>
							<div>
								<img src={telegramIcon} alt="Telegram" />
							</div>
						</div>

					</div>
					<div className={styles.text}>
						<h3 className={styles.section_title}>Контакты:</h3>
						<ShortInfo color={'footer'} />
						<div className={styles.email}>
							<p className={styles.email_info}>opt.sultan@mail.ru</p>
							<p className={styles.email_details}>На связи в любое время</p>
						</div>
						<div>
							<img className={styles.logo_visa} src={visaLogo} alt="Visa" />
							<img src={mastercardLogo} alt="Mastercard" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
