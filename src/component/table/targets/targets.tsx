import React, { useState } from 'react';
import Table from 'component/table/table';
import EditModal from 'component/modal/edit/edit';
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
        action
        handleRowClick={handleRowClick}
      />
      {
        isModalOpen &&
        <EditModal
          title='Edit target'
          action={setIsModalOpen}
          fields={fields}
        />
      }
    </>
  );
}

export default Targets;
