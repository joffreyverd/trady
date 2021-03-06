import React, { ReactElement, useState } from 'react';
import CreateButton from 'component/button/create/create';
import Title from 'component/title/page/page';
import OperationsTable from 'component/table/operations/operations';
import { operations } from 'utils/columnsDefinitions';
import { operationFields } from 'utils/fieldsDefinitions';
import CreateModal from 'component/modal/create/create';

function Operations(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const title = 'Add operation';

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <CreateButton title={title} action={setIsModalOpen} />
      </div>
      <OperationsTable columns={operations} />
      {
        isModalOpen &&
        <CreateModal
          title={title}
          action={setIsModalOpen}
          fields={operationFields}
        />
      }
    </div>
  );
}

export default Operations;
