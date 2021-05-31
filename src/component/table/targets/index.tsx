import React, { useState } from 'react';
import Table from 'component/table';
import AddAction from 'component/modal';
import { editTarget } from 'utils/fieldsDefinitions';
import targets from 'assets/targets.json';
import { chargeFieldsWithValues } from 'utils/tableFunctions';

function Targets(props: Columns) {
  const { columns } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fields, setFields] = useState(editTarget);

  function handleRowClick(rowData) {
    setFields(chargeFieldsWithValues(fields, rowData.values));
    setIsModalOpen(true);
  }

  return (
    <>
      <Table<Targets>
        columns={columns}
        data={targets}
        filter={false}
        goTo=''
        action={true}
        handleRowClick={handleRowClick} />
      {
        isModalOpen &&
        <AddAction
          title='Edit target'
          buttonType='Edit'
          action={setIsModalOpen}
          fields={fields} />
      }
    </>
  );
}

export default Targets;
