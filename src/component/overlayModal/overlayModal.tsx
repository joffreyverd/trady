import React, { useState, useEffect, useContext, ReactElement } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import filter from 'helper/filter';
import Filters from 'component/filters/filters';
import { OperationsContext } from 'context/operationsContext';
import styles from './overlayModal.module.scss';

function OverlayModal(): ReactElement {
  const { data, setFilteredOperations } = useContext(OperationsContext);
  const [onlyShowOpen, toggleOnlyShowOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState('');
  const isActiveFilter = year !== '' || onlyShowOpen ? styles.highlight : '';

  useEffect(() => {
    const filters = { onlyShowOpen, year };
    filter.updateFilters(filters, data, setFilteredOperations);
  }, [onlyShowOpen, year]);

  const yearFilter = filter.getYearFilter({ year, setYear }, data);
  const isOpenPositionFilter = filter.getIsOpenPositionFilter({ onlyShowOpen, toggleOnlyShowOpen });

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
          year={yearFilter}
          isOpenPosition={isOpenPositionFilter}
          setIsModalOpen={setIsModalOpen}
        /> : ''
    }
    </>
  );
}

export default OverlayModal;
