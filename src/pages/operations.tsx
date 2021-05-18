import React, { ReactElement } from 'react';
import Button from 'component/button';
import Title from 'component/title/page';
import OperationsTable from 'component/table/operations';
import { operations } from 'utils/columnsDefinitions';

function Operations(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <Button title='Add operation' action='/' />
      </div>
      <OperationsTable columns={operations} />
    </div>
  );
}

export default Operations;
