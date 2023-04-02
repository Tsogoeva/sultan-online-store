import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import resetStyles from './reset-styles.module.scss';
import style from './app.module.scss';

import Header from '../Header/Header';
import AppRouter from '../AppRouter';
import Footer from '../Footer/Footer';

const App: FC = () => {

  return (
    <BrowserRouter>
      <div style={resetStyles} className={style.app}>
        <Header />
        <AppRouter />
        <Footer />
      </div >
    </BrowserRouter>
  )
}

export default App;
