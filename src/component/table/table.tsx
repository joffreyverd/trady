import React, { useMemo, useContext } from 'react';
import { useTable, useSortBy } from 'react-table';
import Head from 'component/table/head/head';
import Body from 'component/table/body/body';
import { ThemeContext } from 'context/themeContext/themeContext';
import styles from './table.module.scss';

function sort(isSorted: boolean, isSortedDesc: boolean): string {
  if (!isSorted) {
    return '';
  }
  return isSortedDesc ? ' 👇🏼' : ' 👆🏼';
}

function Table<T extends object>(props: Table<T>) {
  const { data, goTo, filter, action, handleRowClick } = props;
  const columns = useMemo(() => props.columns, []);
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  const { getTableProps, getTableBodyProps,
    headerGroups, rows, prepareRow } = useTable(
      { columns, data },
      useSortBy,
    );

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()} className={`${styles.table} ${theme}`}>
        <Head
          headerGroups={headerGroups}
          filter={filter}
          sort={sort} />
        <Body
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
          goTo={goTo}
          action={action}
          handleRowClick={handleRowClick} />
      </table>
    </div>
  );
}

export default Table;
