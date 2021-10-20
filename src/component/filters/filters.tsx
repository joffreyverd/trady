import React, { Dispatch, SetStateAction, ReactElement, useContext } from 'react';
import Checkbox from 'component/filters/type/checkbox';
import Dropdown from 'component/filters/type/dropdown';
import CloseIcon from '@material-ui/icons/Close';
import ClearButton from 'component/button/clear/clear';
import { ToastContext } from 'context/toastContext';
import { ThemeContext } from 'context/themeContext';
import styles from './filters.module.scss';

type Props = {
  options: FiltersOptions[],
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
};

function Filters({ options, setIsModalOpen }: Props): ReactElement<Props> {
  const { themeState } = useContext(ThemeContext);
  const { setToastState } = useContext(ToastContext);
  const modalTheme = themeState ? styles.modalDark : styles.modalLight;

  const reset = () => {
    options.forEach((option) => {
      if (option.type === 'checkbox') {
        option.setState(false);
      }
      if (option.type === 'dropdown') {
        option.setState('');
      }
    });
    setToastState('Filters has been reset');
  };

  return (
    <div className={`${styles.modal} ${modalTheme}`}>
      <h3>Filters</h3>
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        className={styles.closeIcon}
      />
      {
        options.map((option, i): ReactElement => {
          if (option.type === 'checkbox') {
            return <Checkbox option={option} key={i} />;
          }
          if (option.type === 'dropdown') {
            return <Dropdown option={option} key={i} />;
          }
          return <></>;
        })
      }
      <div className={styles.clearAllContainer}>
        <ClearButton title='Clear all' action={reset} />
      </div>
    </div>
  );
}
export default Filters;
