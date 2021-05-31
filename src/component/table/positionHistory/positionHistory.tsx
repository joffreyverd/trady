import React, { useState } from 'react';
import Table from 'component/table/table';
import AddAction from 'component/modal/modal';
import { editPosition } from 'utils/fieldsDefinitions';
import position from 'assets/position.json';
import { chargeFieldsWithValues } from 'utils/tableFunctions';

function PositionHistory(props: Columns) {
  const { columns } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fields, setFields] = useState(editPosition);

  function handleRowClick(rowData) {
    setFields(chargeFieldsWithValues(fields, rowData.values));
    setIsModalOpen(true);
  }

  return (
    <>
      <Table<Position>
        columns={columns}
        data={position}
        filter={true}
        goTo=''
        action={true}
        handleRowClick={handleRowClick} />

      {
        isModalOpen &&
        <AddAction
          title='Edit action'
          buttonType='Edit'
          action={setIsModalOpen}
          fields={fields} />
      }
    </>
  );
}

export default PositionHistory;
