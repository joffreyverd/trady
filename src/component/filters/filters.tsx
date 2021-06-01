import React, { Dispatch, SetStateAction, ReactElement, useContext } from 'react';
import styles from './filters.module.scss';
import Checkbox from 'component/filters/type/checkbox';
import Dropdown from 'component/filters/type/dropdown';
import CloseIcon from '@material-ui/icons/Close';
import ClearButton from 'component/button/clear/clear';
import { ThemeContext } from 'context/themeContext/themeContext';

type Props = {
  options: FiltersOptions[],
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}

function Filters({ options, setIsModalOpen }): ReactElement<Props> {
  const { themeState } = useContext(ThemeContext);
  const modalTheme = themeState ? styles.modalDark : styles.modalLight;

  function reset() {
    options.map((option) => {
      if (option.type === 'checkbox') {
        return option.setState(false);
      }
      if (option.type === 'dropdown') {
        return option.setState('');
      }
    })
  }

  return (
    <div className={`${styles.modal} ${modalTheme}`}>
      <h3>Filters</h3>
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        className={styles.closeIcon} />
      {
        options.map((option, i) => {
          if (option.type === 'checkbox') {
            return <Checkbox option={option} key={i} />
          }
          if (option.type === 'dropdown') {
            return <Dropdown option={option} key={i} />
          }
        })
      }
      <div className={styles.clearAllContainer}>
        <ClearButton title='Clear all' action={reset} />
      </div>
    </div>
  );
}
export default Filters;
