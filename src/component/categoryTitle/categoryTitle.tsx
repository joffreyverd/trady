import styles from './categoryTitle.module.scss';

interface Props {
  title: string,
}

const CategoryTitle: React.FC<Props> = ({ title }) => (
  <h2 className={styles.title}>{title}</h2>
);

export default CategoryTitle;
