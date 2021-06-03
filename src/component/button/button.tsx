import React, { ReactElement, Dispatch, SetStateAction, useContext } from 'react';
import { ToastContext } from 'context/toastContext';
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
  const clearAll = title === 'Clear all' ? styles.clearAllButton : '';
  const { setToastState } = useContext(ToastContext);

  return (
    <button
      type='button'
      className={`${styles.button} ${add} ${edit} ${clearAll}`}
      onClick={() => {
        action(true);
        setToastState('Filters has been reset')
      }}>
      {icon}
      {title && <p>{title}</p>}
    </button>
  );
}

export default Button;
