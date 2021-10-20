import React, { ReactElement, ReactNode, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import styles from './head.module.scss';

type ReactTableColumn = {
  isSorted: boolean,
  isSortedDesc: boolean,
  getSortByToggleProps: () => () => void,
  getHeaderProps: (getSortByToggleProps: () => void) => void,
  render: (value: string) => void
};

type ReactTableHeaderGroup = {
  headers: ReactTableColumn[],
  getHeaderGroupProps: () => void
};

type Props = {
  headerGroups: ReactTableHeaderGroup[],
  filter: [],
  sort: (isSorted: boolean, isSortedDesc: boolean) => ReactNode
};

function Head(props: Props): ReactElement {
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
  );
}

export default Head;
