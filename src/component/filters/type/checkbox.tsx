import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { ToastContext } from 'context/toastContext';
import styles from '../filters.module.scss';

function Checkbox({ option }): ReactElement<FiltersOptions> {
  const { themeState } = useContext(ThemeContext);
  const filterContainerTheme =
    themeState ? styles.filterContainerDark : styles.filterContainerLight;
  const { setToastState } = useContext(ToastContext);

  return (
    <div
      key={option.id}
      className={`${styles.filterContainer} ${filterContainerTheme}`}
    >
      <label htmlFor={option.id}>
        <p>{option.label}</p>
        <input
          type='checkbox'
          id={option.id}
          name={option.id}
          value={option.state}
          checked={option.state}
          onChange={() => {
            option.setState(!option.state);
            setToastState('Filters has been changed');
          }}
        />
      </label>
    </div>
  );
}
export default Checkbox;
