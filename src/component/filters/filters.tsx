import React, { Dispatch, SetStateAction, ReactElement } from 'react';
import styles from './filters.module.scss';
import Checkbox from 'component/filters/type/checkbox';
import Dropdown from 'component/filters/type/dropdown';
import CloseIcon from '@material-ui/icons/Close';
import ClearAllIcon from '@material-ui/icons/ClearAll';

interface Props {
  options: FiltersOptions[],
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
            <Checkbox option={option} />
            : option.type === 'dropdown' ?
              <Dropdown option={option} />
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
