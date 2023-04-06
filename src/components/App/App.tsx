import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import cn from 'classnames';

import resetStyles from './reset-styles.module.scss';
import styles from './app.module.scss';

import Header from '../Header/Header';
import AppRouter from '../AppRouter';
import Footer from '../Footer/Footer';
import { useAppSelector } from '../../hooks';
import ThanksModal from '../UX/ThanksModal/ThanksModal';

const App: FC = () => {
  const { modal } = useAppSelector(state => state.goodReducer);

  return (
    <BrowserRouter>
      <div style={resetStyles} className={modal ? cn(styles.app, styles.opened) : styles.app}>
        <ThanksModal />
        <Header />
        <AppRouter />
        <Footer />
      </div >
    </BrowserRouter>
  )
}

export default App;
