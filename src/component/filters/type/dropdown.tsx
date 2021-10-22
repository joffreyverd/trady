import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { ToastContext } from 'context/toastContext';
import styles from '../filters.module.scss';

type Props = {
  option: DropdownProps
};

function Dropdown({option}: Props): ReactElement {
  const {id, label, state, values, setState} = option;
  const { themeState } = useContext(ThemeContext);
  const filterContainerTheme =
    themeState ? styles.filterContainerDark : styles.filterContainerLight;
  const { setToastState } = useContext(ToastContext);

  return (
    <div
      key={id}
      className={`${styles.filterContainer} ${filterContainerTheme}`}
    >
      <label htmlFor='options'>
        <p>{label}</p>
        <select
          name='options'
          id='options'
          value={state.toString()}
          onChange={(e) => {
            setState(e.target.value);
            setToastState('Filters has been changed');
          }}
        >
          <option value=''>Select</option>
          {
            values.map((value) => (
              <option value={value} key={value}>{value}</option>
            ))
          }
        </select>
      </label>
    </div>
  );
}
export default Dropdown;
