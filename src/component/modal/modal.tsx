import React, { ReactElement, Dispatch, SetStateAction, useEffect } from 'react';
import CreateButton from 'component/button/create';
import UpdateButton from 'component/button/update';
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
    switch (key) {
      case 'Escape':
        action(false);
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <div className={styles.modalContainer} onClick={() => action(false)} >
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <h3>{title}</h3>
        <div>
          {
            fields.map((field, i) => (
              <div className={styles.inputContainer} key={i}>
                <label>{field.label}</label>
                {
                  field.type === 'dropdown' ?
                    <select
                      id={field.id}
                      name={field.id}
                      className={styles.input}
                      defaultValue={field.value}
                      onChange={() => { console.log('change') }}>
                      {
                        field.options.map((option, j) => (
                          <option
                            value={option}
                            key={j}>
                            {option}
                          </option>
                        ))
                      }
                    </select>
                    :
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      defaultValue={field.value}
                      className={styles.input}
                      onChange={() => { console.log('change') }} />
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
