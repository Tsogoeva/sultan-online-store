import { FC } from "react";
import styles from './logo-mini.module.scss';

import logoSultanDark from './assets/logo-sultan-mini-dark.svg';
import logoSultanEyeDark from './assets/logo-sultan-eye-mini-dark.svg';
import logoSultanSDark from './assets/logo-sultan-s-mini-dark.svg';
import logoSultanUDark from './assets/logo-sultan-u-mini-dark.svg';
import logoSultanLDark from './assets/logo-sultan-l-mini-dark.svg';
import logoSultanTDark from './assets/logo-sultan-t-mini-dark.svg';
import logoSultanADark from './assets/logo-sultan-a-mini-dark.svg';
import logoSultanNDark from './assets/logo-sultan-n-mini-dark.svg';

import logoSultanLight from './assets/logo-sultan-mini-light.svg';
import logoSultanEyeLight from './assets/logo-sultan-eye-mini-light.svg';
import logoSultanSLight from './assets/logo-sultan-s-mini-light.svg';
import logoSultanULight from './assets/logo-sultan-u-mini-light.svg';
import logoSultanLLight from './assets/logo-sultan-l-mini-light.svg';
import logoSultanTLight from './assets/logo-sultan-t-mini-light.svg';
import logoSultanALight from './assets/logo-sultan-a-mini-light.svg';
import logoSultanNLight from './assets/logo-sultan-n-mini-light.svg';

interface ILogoProps {
	theme: string;
}

const LogoMini: FC<ILogoProps> = ({ theme }) => {
	const {
		logo,
		logo_sultan,
		logo_sultan_eye_left,
		logo_sultan_eye_right,
		logo_text,
		logo_text_sub
	} = styles;

	return (
		<div className={logo}>
			<div className={logo_sultan}>
				<img src={theme === 'dark' ? logoSultanDark : logoSultanLight} alt="Cултан" />
				<img className={logo_sultan_eye_left} src={theme === 'dark' ? logoSultanEyeDark : logoSultanEyeLight} alt="Глаз" />
				<img className={logo_sultan_eye_right} src={theme === 'dark' ? logoSultanEyeDark : logoSultanEyeLight} alt="Глаз" />
			</div>
			<div className={logo_text}>
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanSDark : logoSultanSLight} alt="S" />
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanUDark : logoSultanULight} alt="U" />
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanLDark : logoSultanLLight} alt="L" />
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanTDark : logoSultanTLight} alt="T" />
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanADark : logoSultanALight} alt="A" />
				<img className={logo_text_sub} src={theme === 'dark' ? logoSultanNDark : logoSultanNLight} alt="N" />
			</div>
		</div>
	)
}

export default LogoMini;
