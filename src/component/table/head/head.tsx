import React, { ReactElement } from 'react';
import styles from './head.module.scss';

function Body(props): ReactElement {
  const { headerGroups, filter, sort } = props;

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th
              {...filter &&
              column.getHeaderProps(column.getSortByToggleProps())
              }
              className={styles.head}
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

export default Body;
