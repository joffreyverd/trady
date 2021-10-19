import Table from 'component/table/table';
import months from 'assets/months.json';
import { ReactElement } from 'react';

function MonthlyResume(props: Columns): ReactElement {
  const { columns } = props;

  return (
    <Table<MonthlyResume>
      columns={columns}
      data={months}
      filter={false}
      goTo=''
      action={false}
      handleRowClick={null}
    />
  );
}

export default MonthlyResume;
