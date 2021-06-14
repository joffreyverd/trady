import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import styles from './button.module.scss';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  icon: ReactElement | null,
}

function Button(props: Props): ReactElement {
  const { title, action, icon } = props;
  const add = title === 'Add' ? styles.addButton : '';
  const edit = title === 'Edit' ? styles.editButton : '';
  const remove = title === 'Remove' ? styles.removeButton : '';
  const clearAll = title === 'Clear all' ? styles.clearAllButton : '';

  return (
    <button
      type='button'
      className={`${styles.button} ${add} ${edit} ${remove} ${clearAll}`}
      onClick={() => action(true)}>
      {icon}
      {title && <p>{title}</p>}
    </button>
  );
}

export default Button;
