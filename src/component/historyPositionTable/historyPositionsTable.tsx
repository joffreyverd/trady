import Table from 'component/table';
import position from 'assets/position.json';

function HistoryPositionsTable(props: Columns) {
  return (
    <Table
      columns={props.columns}
      data={position}
      pagination={false}
      filter={true}
      goTo='' />
  );
}

export default HistoryPositionsTable;
