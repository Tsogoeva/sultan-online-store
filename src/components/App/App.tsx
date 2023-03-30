import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGoods } from '../../store/actionCreators';
import Header from '../Header/Header';
import resetStyles from './reset-styles.module.scss';
import style from './app.module.scss';
import Footer from '../Footer/Footer';

const App: FC = () => {

  const dispatch = useAppDispatch()
  const { goods } = useAppSelector(state => state.goodReducer)
  console.log(goods);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchGoods())
  }, [])


  return (
    <div style={resetStyles} className={style.app}>
      <Header />
      <Footer />
    </div >
  )
}

export default App;
