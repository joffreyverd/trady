import React, { useState, useEffect, useContext, ReactElement } from 'react';
import filter from 'helper/filter';
import { OperationsContext } from 'context/operationsContext';
import OverlayAction from 'component/overlay/action';

function Filter(): ReactElement {
  const { data, setFilteredOperations } = useContext(OperationsContext);
  const [onlyShowOpen, toggleOnlyShowOpen] = useState(false);
  const [year, setYear] = useState('');
  const isActiveFilter = year !== '' || onlyShowOpen;

  useEffect(() => {
    const filters = { onlyShowOpen: onlyShowOpen, year: year };
    filter.updateFilters(filters, data, setFilteredOperations);
  }, [onlyShowOpen, year]);

  const yearsFilter = filter.getYears(data);
  const options = filter.getOptions(
    { onlyShowOpen, toggleOnlyShowOpen },
    { year, setYear },
    yearsFilter,
  );
  return (
    <OverlayAction
      title='Filters'
      isActive={isActiveFilter}
      options={options}
    />
  );
}
export default Filter;
