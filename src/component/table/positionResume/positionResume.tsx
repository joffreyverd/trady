import Table from 'component/table';
import position from 'assets/resumePosition.json';

function PositionResume(props: Columns) {
  return (
    <Table
      columns={props.columns}
      data={position}
      filter={false}
      goTo=''
      handleHover={false} />
  );
}

export default PositionResume;
