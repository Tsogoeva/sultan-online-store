import { FC } from 'react';
import cn from 'classnames';
import styles from './thanks-modal.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeStateModal, resetCart } from '../../../store/goodSlice';

import modalIcon from './assets/thanks-icon.svg';
import closeIcon from './assets/close-modal-icon.svg';


const ThanksModal: FC = () => {
	const { modal } = useAppSelector(state => state.goodReducer);
	const dispatch = useAppDispatch();

	const getClassname = (suspense: string) => modal
		? cn(suspense, styles.opened)
		: cn(suspense, styles.closed);

	const closeHandler = () => {
		dispatch(changeStateModal(modal));
		dispatch(resetCart());
	}

	return (
		<div
			data-testid={'modal'}
			style={modal ? { display: 'block' } : { display: 'none' }}
			className={getClassname(styles.background)}
		>
			<div className={getClassname(styles.modal)}>
				<img
					onClick={closeHandler}
					className={styles.close}
					src={closeIcon}
					alt="Закрыть"
				/>
				<div className={styles.modal_container}>
					<div className={styles.icon}>
						<img src={modalIcon} alt="Галочка" />

					</div>
					<h4 className={styles.thanks}>Спасибо за заказ</h4>
					<p
						className={styles.comment}
					>
						Наш менеджер свяжется с вами в ближайшее время
					</p>
				</div>
			</div>
		</div>
	)
}

export default ThanksModal;
