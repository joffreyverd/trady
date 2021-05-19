import React, { ReactElement, useState, useEffect, useRef } from 'react';
import Button from 'component/button';
import Title from 'component/title/page';
import OperationsTable from 'component/table/operations';
import { operations } from 'utils/columnsDefinitions';
import AddOperation from 'component/modal';

function Operations(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <Button title='Add operation' action={setIsModalOpen} />
      </div>
      <OperationsTable columns={operations} />
      <div>
        {
          isModalOpen ?
            <AddOperation action={setIsModalOpen} />
            : ''
        }
      </div>
    </div>
  );
}

export default Operations;
