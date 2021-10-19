import React, { ReactElement } from 'react';
import styles from '../form.module.scss';

type Props = {
  id: string,
  value: string,
  options: string[],
};

function Dropdown(props: Props): ReactElement {
  const { id, value, options } = props;

  return (
    <select
      id={id}
      name={id}
      className={styles.input}
      defaultValue={value}
      /* eslint-disable no-console */
      onChange={() => { console.log('change'); }}
    >
      {
        options.map((option, j) => (
          <option
            value={option}
            key={j}
          >
            {option}
          </option>
        ))
      }
    </select>
  );
}

export default Dropdown;
