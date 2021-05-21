import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import Head from 'component/table/head';
import Body from 'component/table/body';
import styles from './table.module.scss';

function sort(isSorted: boolean, isSortedDesc: boolean): string {
  if (!isSorted) {
    return '';
  }
  return isSortedDesc ? ' 👇🏼' : ' 👆🏼';
}

function Table<T extends object>(props: Table<T>) {
  const { data, goTo, filter, handleHover } = props;
  const columns = useMemo(() => props.columns, []);

  const { getTableProps, getTableBodyProps,
    headerGroups, rows, prepareRow } = useTable(
      { columns, data },
      useSortBy,
    );

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()} className={styles.tableBody}>
        <Head
          headerGroups={headerGroups}
          filter={filter}
          sort={sort} />
        <Body
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
          goTo={goTo}
          handleHover={handleHover} />
      </table>
    </div>
  );
}

export default Table;
