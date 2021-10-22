import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { ToastContext } from 'context/toastContext';
import styles from '../filters.module.scss';

type Props = {
  option: CheckboxProps
};

function Checkbox({ option }: Props): ReactElement {
  const {id, label, state, setState} = option;
  const { themeState } = useContext(ThemeContext);
  const filterContainerTheme =
    themeState ? styles.filterContainerDark : styles.filterContainerLight;
  const { setToastState } = useContext(ToastContext);
  const stringifiedId = option.id.toString();

  return (
    <div
      key={id}
      className={`${styles.filterContainer} ${filterContainerTheme}`}
    >
      <label htmlFor={stringifiedId}>
        <p>{label}</p>
        <input
          type='checkbox'
          id={stringifiedId}
          name={stringifiedId}
          value={state.toString()}
          checked={state}
          onChange={() => {
            setState(!state);
            setToastState('Filters has been changed');
          }}
        />
      </label>
    </div>
  );
}
export default Checkbox;
