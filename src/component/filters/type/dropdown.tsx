import React, { ReactElement, useContext, Dispatch, SetStateAction } from 'react';
import { ThemeContext } from 'context/themeContext';
import { ToastContext } from 'context/toastContext';
import styles from '../filters.module.scss';

type Options = {
  option: {
    id: string,
    label: string,
    state: string,
    values: [value: string, key: number],
    setState: Dispatch<SetStateAction<string>>
  }
};

function Dropdown({ option }: Options): ReactElement<FiltersOptions> {
  const { themeState } = useContext(ThemeContext);
  const filterContainerTheme =
    themeState ? styles.filterContainerDark : styles.filterContainerLight;
  const { setToastState } = useContext(ToastContext);

  return (
    <div
      key={option.id}
      className={`${styles.filterContainer} ${filterContainerTheme}`}
    >
      <label htmlFor='options'>
        <p>{option.label}</p>
        <select
          name='options'
          id='options'
          value={option.state}
          onChange={(e) => {
            option.setState(e.target.value);
            setToastState('Filters has been changed');
          }}
        >
          <option value=''>Select</option>
          {
            option.values.map((value) => (
              <option value={value} key={value}>{value}</option>
            ))
          }
        </select>
      </label>
    </div>
  );
}
export default Dropdown;
