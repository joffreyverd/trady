import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import AddIcon from '@material-ui/icons/Add';
import styles from './button.module.scss';

interface Props {
  title: string,
  action: string | Dispatch<SetStateAction<boolean>>
}

function Button(props: Props): ReactElement {
  const { title, action } = props;
  return (
    <>
      {
        typeof action === 'string' ?
          <Link href={action}>
            <button type='button' className={styles.button}>
              <AddIcon className={styles.addIcon} />
              <p>{title}</p>
            </button>
          </Link>
          :
          <button type='button' className={styles.button} onClick={() => action(true)}>
            <AddIcon className={styles.addIcon} />
            <p>{title}</p>
          </button>
      }
    </>

  );
}

export default Button;
