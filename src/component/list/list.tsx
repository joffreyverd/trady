import styles from './list.module.scss';

const List: React.FC<HTMLElement> = () => (
  <div className={styles.list}>
    <p>CoinMarketCap List</p>
  </div>
);

export default List;
