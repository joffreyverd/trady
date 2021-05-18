import React, { useMemo } from 'react';
import Link from 'next/link';
import { useTable, useSortBy, usePagination } from 'react-table';
import styles from './table.module.scss';
import Cell from './cell';

function Table(props: Table) {
  const { data, pagination, goTo, filter } = props;
  const columns = useMemo(() => props.columns, []);

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
              {headerGroup.headers.map((column, i) => (
                <th
                  {...filter ?
                    column.getHeaderProps(column.getSortByToggleProps())
                    : ''
                  }
                  className={styles.head}
                  key={i}
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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              goTo ?
                <Link href={`${goTo}${row.id}`} key={i}>
                  <tr {...row.getRowProps()} className={styles.row}>
                    {row.cells.map((cell, j) => (
                      <Cell object={cell} key={j} />
                    ))}
                  </tr>
                </Link>
                :
                <tr {...row.getRowProps()} className={styles.row} key={i}>
                  {row.cells.map((cell, k) => (
                    <Cell object={cell} key={k} />
                  ))}
                </tr>
            );
          })}
        </tbody>
      </table>

      { pagination ?
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
        : ''
      }
    </div>
  );
}

export default Table;
