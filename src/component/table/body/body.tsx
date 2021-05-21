import React, { ReactElement } from 'react';
import Link from 'next/link';
import Cell from 'component/table/cell';
import styles from './body.module.scss';


function Body(props): ReactElement {
  const { getTableBodyProps, rows, prepareRow, goTo } = props;

  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
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
        )
      })}
    </tbody>
  )
}

export default Body;
