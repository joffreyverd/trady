import React from 'react';
import Link from 'next/link';
import { useTable, useSortBy, usePagination } from 'react-table';
import styles from './table.module.scss';
import Cell from '../cell';

interface Props {
  data: OperationsTableContent[],
  columns: OperationsTableColumns[],
}

function Table(props:Props) {
  const data = React.useMemo(() => props.data, []);
  const columns = React.useMemo(() => props.columns, []);

  const { getTableProps, getTableBodyProps,
    headerGroups, page, prepareRow,
    pageOptions,
    canPreviousPage, canNextPage,
    setPageSize, previousPage, nextPage,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useSortBy, usePagination,
  );

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()} className={styles.tableBody}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={styles.head}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? column.isSortedDesc ? ' 👇🏼' : ' 👆🏼' : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Link href={`./positions/${row.original.id}`}>
                <tr {...row.getRowProps()} className={styles.row}>
                  {row.cells.map((cell) => (
                    <Cell object={cell} />
                  ))}
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>

      <div className={styles.paginationContainer}>
        <button
          type='button'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={styles.button}
        >👈🏻
        </button>
        <button
          type='button'
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={styles.button}
        >👉🏻
        </button>
        <p>Page {pageIndex + 1}/{pageOptions.length}</p>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 50, 100].map((size) => (
            <option key={size} value={size}>Show {size}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Table;
