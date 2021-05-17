import Link from 'next/link';
import styles from './breadcrumb.module.scss';

interface Props {
  path: string,
  name: string,
  current: string
}

const BreadCrumb: React.FC<Props> = ({ path, name, current }) => (
  <div className={styles.breadcrumbContainer}>
    <Link href='/'>Home </Link>
    <p>/</p>
    <Link href={path}>{name}</Link>
    <p>/ {current}</p>
  </div>
);

export default BreadCrumb;
