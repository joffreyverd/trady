import { Dispatch, SetStateAction } from 'react';

type Filters = {
  onlyShowOpen: boolean,
  year: string
};

function updateFilters(
  filters: Filters, operations: Operation[], setOperations: Dispatch<SetStateAction<Operation[]>>,
): void {
  const { onlyShowOpen, year } = filters;
  const filteredData = operations.filter((singleData) => {
    if (onlyShowOpen && singleData.status !== 'Open') {
      return '';
    }
    const openYear = new Date(singleData.open).getFullYear();
    if (year !== '' && openYear !== parseInt(year, 10)) {
      return '';
    }
    return singleData;
  });
  setOperations(filteredData);
}

function getYears(operations: Operation[]): string[] {
  const years = [];
  operations.forEach((operation) => {
    const openYear = new Date(operation.open).getFullYear();
    if (!years.includes(openYear)) {
      years.push(openYear);
    }
  });
  return years;
}

type Year = {
  year: string,
  setYear: Dispatch<SetStateAction<string>>,
};

function getYearFilter(yearFilter: Year, operations: Operation[]): DropdownProps {
  const { year, setYear } = yearFilter;
  const years = getYears(operations);
  const filter = {
    id: 1,
    label: 'Year',
    type: 'dropdown',
    values: years,
    state: year,
    setState: setYear,
  };
  return filter;
}

type IsOpenPosition = {
  onlyShowOpen: boolean,
  toggleOnlyShowOpen: Dispatch<SetStateAction<boolean>>,
};

function getIsOpenPositionFilter(isOpenPosition: IsOpenPosition): CheckboxProps {
  const { onlyShowOpen, toggleOnlyShowOpen } = isOpenPosition;
  return {
    id: 0,
    label: 'Only show open positions',
    type: 'checkbox',
    values: [true, false],
    state: onlyShowOpen,
    setState: toggleOnlyShowOpen,
  };
}

export default { getYears, getYearFilter, getIsOpenPositionFilter, updateFilters };
