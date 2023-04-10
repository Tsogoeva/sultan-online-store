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
import LogoMini from '../UI/LogoMini/LogoMini';


const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>

				<div className={styles.container}>
					<div className={cn(styles.about, styles.text)}>
						<Logo theme={"light"} />
						<p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
						<p className={styles.appeal}>Подпишись на скидки и акции</p>
						<div className={styles.input_container}>
							<Input placeholder={'Введите ваш E-mail'} icon={emailIcon} />

						</div>
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
					<div className={styles.content_mobile}>
						<div className={styles.top_footer_mobile}>
							<LogoMini theme={'light'} />
							<Button text={'Прайс-лист'} size={'mini'} icon={buttonDownloadIcon} />
						</div>
						<p className={styles.description_mobile}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
						<p className={styles.appeal}>Подпишись на скидки и акции</p>
						<div className={styles.input_container}>
							<input
								className={styles.input}
								type="text"
								placeholder="Введите ваш E-mail"
							/>
							<button className={styles.button} type="submit">
								<img className={styles.icon} src={emailIcon} alt="Иконка" />
							</button>
						</div>
						<div className={styles.container_section}>
							<div className={cn(styles.text_mobile, styles.section_up_mobile)}>
								<h3 className={styles.section_title_mobile}>Меню сайта:</h3>
								<p className={styles.section_item_mobile}>О компании</p>
								<p className={styles.section_item_mobile}>Доставка и оплата</p>
								<p className={styles.section_item_mobile}>Возврат</p>
								<p className={styles.section_item_mobile}>Контакты</p>
							</div>
							<div className={styles.text_mobile}>
								<h3 className={styles.section_title_mobile}>Категории:</h3>
								<p className={styles.section_item_mobile}>Бытовая химия</p>
								<p className={styles.section_item_mobile}>Косметика и гигиена</p>
								<p className={styles.section_item_mobile}>Товары для дома</p>
								<p className={styles.section_item_mobile}>Товары для детей и мам</p>
								<p className={styles.section_item_mobile}>Посуда</p>
							</div>

						</div>
						<div className={styles.container_connection}>
							<div className={styles.text_mobile}>
								<h3 className={styles.section_title_mobile}>Контакты:</h3>
								<ShortInfo color={'footer'} />
								<div className={styles.email_mobile}>
									<p className={styles.email_info_mobile}>opt.sultan@mail.ru</p>
									<p className={styles.email_details_mobile}>На связи в любое время</p>
								</div>
								<div>
									<img className={styles.logo_visa_mobile} src={visaLogo} alt="Visa" />
									<img src={mastercardLogo} alt="Mastercard" />
								</div>
							</div>

							<div className={styles.section_up_mobile}>
								<p className={styles.connection_text_mobile}>Связь в мессенджерах:</p>
								<div className={styles.connection_icons_mobile}>
									<div className={styles.connection_whatsapp_mobile}>
										<img src={whatsappIcon} alt="WhatsApp" />
									</div>
									<div>
										<img src={telegramIcon} alt="Telegram" />
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		</footer>
	)
}

export default Footer;
