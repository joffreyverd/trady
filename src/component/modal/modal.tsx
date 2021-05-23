import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CreateButton from 'component/button/create';
import styles from './modal.module.scss';

interface Props {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
}

function Modal(props): ReactElement<Props> {
  const { title, action, fields } = props;

  return (
    <div className={styles.modalContainer} onClick={() => action(false)} >
      <CloseIcon
        onClick={() => () => action(true)}
        className={styles.closeIcon} />
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

        <div className={styles.addButtonContainer}>
          <CreateButton title='Add' action={action} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
