import React, { ReactElement, useContext } from 'react';
import Link from 'next/link';
import Cell from 'component/table/cell/cell';
import { ThemeContext } from 'context/themeContext';
import styles from './body.module.scss';

function Body(props): ReactElement {
  const { getTableBodyProps, rows, prepareRow, goTo, action, handleRowClick } = props;
  const { themeState } = useContext(ThemeContext);
  const rowStyle = action ? styles.actionRow : styles.row;
  const theme = themeState ? styles.dark : styles.light;

  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        if (goTo) {
          return (
            <Link href={`${goTo}${row.id}`} key={i}>
              <tr {...row.getRowProps()} className={`${rowStyle} ${theme}`}>
                {row.cells.map((cell, j) => (
                  <Cell object={cell} key={j} />
                ))}</tr>
            </Link>
          )
        } else {
          return (
            <tr {...row.getRowProps()}
              className={`${rowStyle} ${theme}`}
              key={i}
              onClick={() => handleRowClick ? handleRowClick(row) : ''}>
              {
                row.cells.map((cell, k) => (
                  <Cell object={cell} key={k} />
                ))
              }
            </tr>
          )
        }
      })}
    </tbody>
  )
}

export default Body;
