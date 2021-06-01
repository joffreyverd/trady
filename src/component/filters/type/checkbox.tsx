import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext/themeContext';
import styles from '../filters.module.scss';

function Checkbox({ option }): ReactElement<FiltersOptions> {
  const { themeState } = useContext(ThemeContext);
  const filterContainerTheme =
    themeState ? styles.filterContainerDark : styles.filterContainerLight;

  return (
    <div
      key={option.id}
      className={`${styles.filterContainer} ${filterContainerTheme}`}>
      <label htmlFor={option.id}>
        <p>{option.label}</p>
        <input
          type='checkbox'
          id={option.id}
          name={option.id}
          value={option.state}
          checked={option.state}
          onChange={() => option.setState(!option.state)} />
      </label>
    </div>
  );
}
export default Checkbox;
