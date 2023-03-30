import { FC } from "react";
import styles from './logo-dark.module.scss';

import logoSultan from './assets/logo-sultan.svg';
import logoSultanEye from './assets/logo-sultan-eye.svg';
import logoSultanS from './assets/logo-sultan-s.svg';
import logoSultanU from './assets/logo-sultan-u.svg';
import logoSultanL from './assets/logo-sultan-l.svg';
import logoSultanT from './assets/logo-sultan-t.svg';
import logoSultanA from './assets/logo-sultan-a.svg';
import logoSultanN from './assets/logo-sultan-n.svg';

const LogoDark: FC = () => {
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
				<img src={logoSultan} alt="Cултан" />
				<img className={logo_sultan_eye_left} src={logoSultanEye} alt="Глаз" />
				<img className={logo_sultan_eye_right} src={logoSultanEye} alt="Глаз" />
			</div>
			<div className={logo_text}>
				<img className={logo_text_sub} src={logoSultanS} alt="S" />
				<img className={logo_text_sub} src={logoSultanU} alt="U" />
				<img className={logo_text_sub} src={logoSultanL} alt="L" />
				<img className={logo_text_sub} src={logoSultanT} alt="T" />
				<img className={logo_text_sub} src={logoSultanA} alt="A" />
				<img className={logo_text_sub} src={logoSultanN} alt="N" />
			</div>
		</div>
	)
}

export default LogoDark;