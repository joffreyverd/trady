import React, { useContext } from 'react';
import { OperationsContext } from 'context/operationsContext';
import Table from 'component/table';

function Operations(props: Columns) {
  const { filteredOperations } = useContext(OperationsContext);

  return (
    <Table<Operation>
      columns={props.columns}
      data={filteredOperations}
      filter={true}
      goTo='./positions/'
      action={true}
      handleRowClick={null} />
  );
}

export default Operations;
