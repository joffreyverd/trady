import React, { useContext } from 'react';
import { OperationsContext } from 'context/operationsContext';
import Table from 'component/table';

function Operations(props: Columns) {
  const { filteredOperations } = useContext(OperationsContext);

  return (
    <Table
      columns={props.columns}
      data={filteredOperations}
      filter={true}
      goTo='./positions/' />
  );
}

export default Operations;
