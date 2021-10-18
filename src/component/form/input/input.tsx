import React, { ReactElement } from 'react';
import styles from '../form.module.scss';

type Props = {
  id: string
  type: string,
  value: string,
};

function Input(props: Props): ReactElement {
  const { id, type, value } = props;

  return (
    <input
      type={type}
      id={id}
      name={id}
      defaultValue={value}
      className={styles.input}
      onChange={() => { console.log('change'); }}
    />
  );
}

export default Input;
