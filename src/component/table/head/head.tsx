import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import styles from './head.module.scss';

function Head(props): ReactElement {
  const { headerGroups, filter, sort } = props;
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th
              {...filter &&
              column.getHeaderProps(column.getSortByToggleProps())
              }
              className={`${styles.head} ${theme}`}
              key={i}
            >
              {column.render('Header')}
              <span>
                {sort(column.isSorted, column.isSortedDesc)}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default Head;
