import React, { ReactElement } from 'react';
import styles from './modal.module.scss';

function Modal(props): ReactElement {
  const { action } = props;

  return (
    <div
      className={styles.modalContainer}
      onClick={() => action(false)}
    >
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        MODAL
       </div>
    </div>
  );
}

export default Modal;
