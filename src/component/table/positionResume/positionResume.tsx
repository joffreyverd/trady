import { ReactElement } from 'react';
import Table from 'component/table/table';
import position from 'assets/resumePosition.json';

function PositionResume(props: Columns): ReactElement {
  const { columns } = props;

  return (
    <Table<ResumePosition>
      columns={columns}
      data={position}
      filter={false}
      goTo=''
      action={false}
      handleRowClick={null}
    />
  );
}

export default PositionResume;
