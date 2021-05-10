import Link from 'next/link';
import styles from './button.module.scss';

interface Props {
  title: string,
  action: string
}

const Button: React.FC<Props> = ({ title, action }) => (
  <Link href={action}>
    <button type='button' className={styles.button}>
      {title}
    </button>
  </Link>
);

export default Button;
