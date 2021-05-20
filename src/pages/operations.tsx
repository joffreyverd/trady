import React, { ReactElement, useState } from 'react';
import Button from 'component/button';
import Title from 'component/title/page';
import OperationsTable from 'component/table/operations';
import { operations } from 'utils/columnsDefinitions';
import { fields } from 'utils/fieldsDefinitions';
import AddOperation from 'component/modal';

function Operations(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const title = 'Add operation';

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <Button title={title} action={setIsModalOpen} />
      </div>
      <OperationsTable columns={operations} />
      <div>
        {
          isModalOpen ?
            <AddOperation
              title={title}
              action={setIsModalOpen}
              fields={fields} />
            : ''
        }
      </div>
    </div>
  );
}

export default Operations;
