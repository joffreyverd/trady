import React, { Dispatch, SetStateAction, ReactElement } from 'react';
import styles from './filters.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import ClearAllIcon from '@material-ui/icons/ClearAll';

interface Options {
  id: number,
  label: string,
  type: string,
  values: [],
  state: boolean | string,
  setState: Dispatch<SetStateAction<boolean | string>>,
}

interface Props {
  options: Options[],
  toggleModal: Dispatch<SetStateAction<boolean>>
}

function Filters({ options, toggleModal }): ReactElement<Props> {
  return (
    <div className={styles.modal}>
      <h3>Filters</h3>
      <CloseIcon onClick={() => toggleModal(false)} className={styles.closeIcon} />
      {
        options.map((option) => (
          option.type === 'checkbox' ?
            <div key={option.id} className={styles.filterContainer}>
              <label htmlFor={option.id}>
                <p>{option.label}</p>
                <input
                  type='checkbox'
                  id={option.id}
                  name={option.id}
                  defaultChecked={option.state}
                  onChange={() => option.setState(!option.state)}
                />
              </label>
            </div>

            : option.type === 'dropdown' ?
              <div key={option.id} className={styles.filterContainer}>
                <label htmlFor='options'>
                  <p>{option.label}</p>
                  <select
                    name='options'
                    id='options'
                    defaultValue={option.state}
                    onChange={(e) => { option.setState(e.target.value); }}
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
              : ''
        ))
      }
      <div className={styles.clearAllContainer}>
        <button type='button' className={styles.clearAll}>
          <ClearAllIcon className={styles.clearAllIcon} />
          <p>Clear all</p>
        </button>
      </div>
    </div>
  );
}
export default Filters;
