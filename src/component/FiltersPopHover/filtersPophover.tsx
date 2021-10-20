import React, { useState, ReactElement } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import Filters from 'component/filters/filters';
import styles from './filtersPophover.module.scss';

type Props = {
  options: FiltersOptions[],
  isActive: boolean,
};

const FiltersPophover = ({ options, isActive }: Props): ReactElement<Props> => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isActiveFilter = isActive ? styles.highlight : '';

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${isActiveFilter}`}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <FilterListIcon className={styles.filterIcon} />
      </button>
      {
        isModalOpen ?
          <Filters
            options={options}
            setIsModalOpen={setIsModalOpen}
          /> : ''
      }
    </>
  );
};

export default FiltersPophover;
