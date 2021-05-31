import React, { ReactElement } from 'react';
import styles from './list.module.scss';

function List(): ReactElement {
  return (
    <div className={styles.list}>
      <p>CoinMarketCap List</p>
    </div>
  );
}

export default List;
