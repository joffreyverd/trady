import React, { useContext } from 'react';
import { OperationsContext } from 'context/operationsContext';
import Table from 'component/table';

function OperationsTable(props: Columns) {
  const { filteredOperations } = useContext(OperationsContext);

  return (
    <Table
      columns={props.columns}
      data={filteredOperations}
      pagination={true}
      filter={true}
      goTo='./positions/' />
  );
}

export default OperationsTable;
