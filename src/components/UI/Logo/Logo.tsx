import { FC } from "react";
import styles from './logo.module.scss';

import logoSultanDark from './assets/logo-dark-sultan.svg';
import logoSultanEyeDark from './assets/logo-dark-sultan-eye.svg';
import logoSultanSDark from './assets/logo-dark-sultan-s.svg';
import logoSultanUDark from './assets/logo-dark-sultan-u.svg';
import logoSultanLDark from './assets/logo-dark-sultan-l.svg';
import logoSultanTDark from './assets/logo-dark-sultan-t.svg';
import logoSultanADark from './assets/logo-dark-sultan-a.svg';
import logoSultanNDark from './assets/logo-dark-sultan-n.svg';

import logoSultanLight from './assets/logo-light-sultan.svg';
import logoSultanEyeLight from './assets/logo-light-sultan-eye.svg';
import logoSultanSLight from './assets/logo-light-sultan-s.svg';
import logoSultanULight from './assets/logo-light-sultan-u.svg';
import logoSultanLLight from './assets/logo-light-sultan-l.svg';
import logoSultanTLight from './assets/logo-light-sultan-t.svg';
import logoSultanALight from './assets/logo-light-sultan-a.svg';
import logoSultanNLight from './assets/logo-light-sultan-n.svg';

interface ILogoProps {
	theme: string;
}

const Logo: FC<ILogoProps> = ({ theme }) => {
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

export default Logo;
