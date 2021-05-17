import styles from './footer.module.scss';

const Button: React.FC<HTMLElement> = () => (
  <div className={styles.footer}>
    <a
      href='https://github.com/joffreyverd/trady'
      target='_blank'
      rel='noreferrer'
    >
      Trady is an open-source project
    </a>
  </div>
);

export default Button;
