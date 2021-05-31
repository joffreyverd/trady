import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext/themeContext';
import styles from './list.module.scss';

function List(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  return (
    <div className={`${styles.list} ${theme}`}>
      <p>CoinMarketCap List</p>
    </div>
  );
}

export default List;
