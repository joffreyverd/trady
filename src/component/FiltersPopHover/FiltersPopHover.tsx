import React, { useState, Dispatch, SetStateAction, ReactElement } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from './filtersPopHover.module.scss';
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
  title: string,
  options: Option[],
  isActive: boolean,
}

function FiltersPopHover({ title, options, isActive }): ReactElement<Props> {
  const [isModalOpen, toggleModal] = useState(false);
  const isActiveFilter = isActive ? styles.highlight : '';

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${isActiveFilter}`}
        onClick={() => toggleModal(!isModalOpen)}
      >
        <FilterListIcon className={styles.filterIcon} />
      </button>
      { isModalOpen ?
        <Filters
          title='Filters'
          options={options}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        /> : ''}
    </>
  );
}
export default FiltersPopHover;
