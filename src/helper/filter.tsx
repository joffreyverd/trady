interface Filters {
  onlyShowOpen: boolean,
  year: string
}

function updateFilters(
  filters: Filters, operations: Operation[], setOperations: Function,
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
  operations.map((operation) => {
    const openYear = new Date(operation.open).getFullYear();
    if (!years.includes(openYear)) {
      years.push(openYear);
    }
  });
  return years;
}

interface OpenFilter {
  onlyShowOpen: boolean,
  toggleOnlyShowOpen: Function,
}

interface YearFilter {
  year: string,
  setYear: Function,
}

function getOptions(openFilter: OpenFilter, yearFilter: YearFilter, years: []) {
  const { onlyShowOpen, toggleOnlyShowOpen } = openFilter;
  const { year, setYear } = yearFilter;
  return [
    {
      id: 0,
      label: 'Only show open positions',
      type: 'checkbox',
      values: [true, false],
      state: onlyShowOpen,
      setState: toggleOnlyShowOpen,
    },
    {
      id: 1,
      label: 'Year',
      type: 'dropdown',
      values: years,
      state: year,
      setState: setYear,
    },
  ];
}

export default { getYears, getOptions, updateFilters };
