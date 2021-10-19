import React, { useContext, ReactElement } from 'react';
import { OperationsContext } from 'context/operationsContext';
import Table from 'component/table/table';

function Operations(props: Columns): ReactElement {
  const { columns } = props;
  const { filteredOperations } = useContext(OperationsContext);

  return (
    <Table<Operation>
      columns={columns}
      data={filteredOperations}
      filter
      goTo='./positions/'
      action
      handleRowClick={null}
    />
  );
}

export default Operations;
