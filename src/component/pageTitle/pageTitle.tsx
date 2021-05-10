import styles from './pageTitle.module.scss';

interface Props {
  title: string,
}

const PageTitle: React.FC<Props> = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default PageTitle;
