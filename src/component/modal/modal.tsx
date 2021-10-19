import React, { ReactElement, Dispatch, SetStateAction, useEffect, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import Dropdown from 'component/form/dropdown/dropdown';
import Input from 'component/form/input/input';
import styles from './modal.module.scss';

type Props = {
  title: string,
  modalAction: ReactElement | HTMLElement;
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
};

function Modal(props: Props): ReactElement {
  const { title, modalAction, action, fields } = props;
  const { themeState } = useContext(ThemeContext);
  const modalTheme = themeState ? styles.modalThemeDark : styles.modalThemeLight;
  const inputTheme = themeState ? styles.inputThemeDark : styles.inputThemeLight;

  const keydownHandler = ({ key }) => key === 'Escape' && action(false);

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <div className={styles.modalContainer} onClick={() => action(false)}>
      <div
        className={`${styles.modalContent} ${modalTheme}`}
        onClick={(event) => event.stopPropagation()}
      >
        <h3>{title}</h3>
        <div>
          {
            fields.map((f, i) => (
              <div className={`${styles.inputContainer} ${inputTheme}`} key={i}>
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

        {modalAction}
      </div>
    </div>
  );
}

export default Modal;
