import React, { Dispatch, SetStateAction, ReactElement } from 'react';
import styles from './filters.module.scss';
import Checkbox from 'component/filters/type/checkbox';
import Dropdown from 'component/filters/type/dropdown';
import CloseIcon from '@material-ui/icons/Close';
import ClearAllIcon from '@material-ui/icons/ClearAll';

interface Props {
  options: FiltersOptions[],
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}

function Filters({ options, setIsModalOpen }): ReactElement<Props> {

  function reset() {
    options.map((option) => (
      option.type === 'checkbox' ? option.setState(false) :
        option.type === 'dropdown' ? option.setState('') : ''
    ))
  }

  return (
    <div className={styles.modal}>
      <h3>Filters</h3>
      <CloseIcon
        onClick={() => setIsModalOpen(false)}
        className={styles.closeIcon} />
      {
        options.map((option, i) => (
          option.type === 'checkbox' ?
            <Checkbox option={option} key={i} />
            : option.type === 'dropdown' ?
              <Dropdown option={option} key={i} />
              : ''
        ))
      }
      <div className={styles.clearAllContainer}>
        <button type='button' className={styles.clearAll} onClick={() => reset()} >
          <ClearAllIcon className={styles.clearAllIcon} />
          <p>Clear all</p>
        </button>
      </div>
    </div>
  );
}
export default Filters;
