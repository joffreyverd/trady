import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

interface Props {
  title: string,
  action: string
}

function Button(props: Props): ReactElement {
  const { title, action } = props;
  return (
    <Link href={action}>
      <button type='button' className={styles.button}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
