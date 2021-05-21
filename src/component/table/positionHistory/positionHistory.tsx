import Table from 'component/table';
import position from 'assets/position.json';

function PositionHistory(props: Columns) {
  return (
    <Table
      columns={props.columns}
      data={position}
      filter={true}
      goTo='' />
  );
}

export default PositionHistory;
