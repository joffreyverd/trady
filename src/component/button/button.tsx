import React, { ReactElement } from 'react';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';
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
        <AddIcon className={styles.addIcon} />
        <p>{title}</p>
      </button>
    </Link>
  );
};

export default Button;
