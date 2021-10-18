import React, { useContext } from 'react';
import { OperationsContext } from 'context/operationsContext';
import Table from 'component/table/table';

function Operations(props: Columns) {
  const { filteredOperations } = useContext(OperationsContext);

  return (
    <Table<Operation>
      columns={props.columns}
      data={filteredOperations}
      filter
      goTo='./positions/'
      action
      handleRowClick={null}
    />
  );
}

export default Operations;
