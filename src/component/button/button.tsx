import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import AddIcon from '@material-ui/icons/Add';
import styles from './button.module.scss';

interface Props {
  title: string,
  action: Dispatch<SetStateAction<boolean>>
}

function Button(props: Props): ReactElement {
  const { title, action } = props;
  return (
    <button type='button' className={styles.button} onClick={() => action(true)}>
      <AddIcon className={styles.addIcon} />
      <p>{title}</p>
    </button>
  );
}

export default Button;
