import React, { Dispatch, SetStateAction, ReactElement, useContext } from 'react';
import Checkbox from 'component/filters/type/checkbox';
import Dropdown from 'component/filters/type/dropdown';
import CloseIcon from '@material-ui/icons/Close';
import ClearButton from 'component/button/clear/clear';
import { ToastContext } from 'context/toastContext';
import { ThemeContext } from 'context/themeContext';
import styles from './filters.module.scss';

type Props = {
  year: DropdownProps,
  isOpenPosition: CheckboxProps,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
};

function Filters({ year, isOpenPosition, setIsModalOpen }: Props): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const { setToastState } = useContext(ToastContext);
  const modalTheme = themeState ? styles.modalDark : styles.modalLight;

  const reset = () => {
    isOpenPosition.setState(false);
    year.setState(false);
    setToastState('Filters has been reset');
  };

  return (
    <div className={`${styles.modal} ${modalTheme}`}>
      <h3>Filters</h3>
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        className={styles.closeIcon}
      />
        <Checkbox option={isOpenPosition} />
        <Dropdown option={year} />
      <div className={styles.clearAllContainer}>
        <ClearButton title='Clear all' action={reset} />
      </div>
    </div>
  );
}

export default Filters;
