import Table from 'component/table';
import targets from 'assets/targets.json';

function TargetsTable(props: Columns) {
  return (
    <Table
      columns={props.columns}
      data={targets}
      pagination={false}
      filter={false}
      goTo='' />
  );
}

export default TargetsTable;
