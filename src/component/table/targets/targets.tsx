import Table from 'component/table';
import targets from 'assets/targets.json';

function Targets(props: Columns) {
  return (
    <Table<Targets>
      columns={props.columns}
      data={targets}
      filter={false}
      goTo=''
      action={true} />
  );
}

export default Targets;
