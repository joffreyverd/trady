import React from 'react';
import Button from 'component/button';
import Title from 'component/pageTitle';
import OperationsTable from 'component/operationsTable';

const columns = [
  { Header: 'Status', accessor: 'status' },
  { Header: 'Side', accessor: 'side' },
  { Header: 'Pair', accessor: 'pair' },
  { Header: 'Open Date', accessor: 'open' },
  { Header: 'Average Entry', accessor: 'buy' },
  { Header: 'Cost', accessor: 'cost' },
  { Header: 'Average Exit', accessor: 'sell' },
  { Header: 'Return $', accessor: 'returnD' },
  { Header: 'Return %', accessor: 'returnP' },
];


function Operations(): React.ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <Button title='Add operation' action='/' />
      </div>
      <OperationsTable columns={columns} />
    </div>
  );
}

export default Operations;
