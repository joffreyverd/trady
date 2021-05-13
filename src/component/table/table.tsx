import React from 'react';
import { useTable } from 'react-table';
import styles from './table.module.scss';

interface Props {
  data: [],
  columns: [],
}

function Table(props:Props) {
  const data = React.useMemo(() => props.data, []);
  const columns = React.useMemo(() => props.columns, []);

  const { getTableProps, getTableBodyProps,
    headerGroups, rows, prepareRow,
  } = useTable({ columns, data });

  return (
    <div className={styles.tableContainer}>
      <table {...getTableProps()} className={styles.tableBody}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className={styles.head}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={styles.cell}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
}

export default Table;
