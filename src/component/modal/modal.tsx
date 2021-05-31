import React, { ReactElement, Dispatch, SetStateAction, useEffect } from 'react';
import Dropdown from 'component/form/dropdown/dropdown';
import Input from 'component/form/input/input';
import CreateButton from 'component/button/create/create';
import UpdateButton from 'component/button/update/update';
import styles from './modal.module.scss';

type Props = {
  title: string,
  buttonType: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
}

function Modal(props: Props): ReactElement {
  const { title, buttonType, action, fields } = props;

  const keydownHandler = ({ key }) => {
    key === 'Escape' && action(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <div className={styles.modalContainer} onClick={() => action(false)} >
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}>
        <h3>{title}</h3>
        <div>
          {
            fields.map((f, i) => (
              <div className={styles.inputContainer} key={i}>
                <label>{f.label}</label>
                {
                  f.type === 'dropdown' ?
                    <Dropdown id={f.id} value={f.value} options={f.options} />
                    :
                    <Input id={f.id} type={f.type} value={f.value} />
                }
              </div>
            ))
          }
        </div>

        <div className={styles.buttonContainer}>
          {
            buttonType === 'Add' &&
            <CreateButton title={buttonType} action={action} />
          }
          {
            buttonType === 'Edit' &&
            <UpdateButton title={buttonType} action={action} />
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
