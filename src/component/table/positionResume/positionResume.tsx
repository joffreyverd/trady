import Table from 'component/table';
import position from 'assets/resumePosition.json';

function PositionResume(props: Columns) {
  return (
    <Table
      columns={props.columns}
      data={position}
      pagination={false}
      filter={false}
      goTo='' />
  );
}

export default PositionResume;
