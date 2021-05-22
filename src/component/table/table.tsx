import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import Head from 'component/table/head';
import Body from 'component/table/body';
import ModalUpdateRow from 'component/modal';
import { actionFields } from 'utils/fieldsDefinitions';
import styles from './table.module.scss';

function sort(isSorted: boolean, isSortedDesc: boolean): string {
  if (!isSorted) {
    return '';
  }
  return isSortedDesc ? ' 👇🏼' : ' 👆🏼';
}

function Table<T extends object>(props: Table<T>) {
  const { data, goTo, filter, action } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fields, setFields] = useState(actionFields);
  const columns = useMemo(() => props.columns, []);

  const { getTableProps, getTableBodyProps,
    headerGroups, rows, prepareRow } = useTable(
      { columns, data },
      useSortBy,
    );

  function handleRowClick(rowData) {
    const row = rowData.values;
    fields.map((field) => {
      if (field.id in row) {
        field.value = row[field.id];
      }
    });
    setFields(fields);
    setIsModalOpen(true);
  }

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
          action={action}
          handleRowClick={handleRowClick} />
      </table>
      {
        isModalOpen && action &&
        < ModalUpdateRow
          title='Edit'
          action={setIsModalOpen}
          fields={fields} />
      }
    </div>
  );
}

export default Table;
