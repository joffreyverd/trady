import React, { useState, Dispatch, SetStateAction, ReactElement } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from './filtersPophover.module.scss';
import Filters from 'component/filters';

interface Option {
  id: number,
  label: string,
  type: string,
  values: [],
  state: boolean | string,
  setState: Dispatch<SetStateAction<any>>,
}

interface Props {
  options: Option[],
  isActive: boolean,
}

function FiltersPophover({ options, isActive }): ReactElement<Props> {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isActiveFilter = isActive ? styles.highlight : '';

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${isActiveFilter}`}
        onClick={() => setIsModalOpen(!isModalOpen)}>
        <FilterListIcon className={styles.filterIcon} />
      </button>
      {
        isModalOpen ?
          <Filters
            options={options}
            setIsModalOpen={setIsModalOpen} /> : ''
      }
    </>
  );
}
export default FiltersPophover;
