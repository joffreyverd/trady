import React from 'react';
import Button from 'component/button';
import Title from 'component/pageTitle';
import Table from 'component/table';

const columns = [
  { Header: 'Status', accessor: 'status' },
  { Header: 'Side', accessor: 'side' },
  { Header: 'Pair', accessor: 'pair' },
  { Header: 'Open Date', accessor: 'open' },
  { Header: 'Average Buy', accessor: 'buy' },
  { Header: 'Cost', accessor: 'cost' },
  { Header: 'Average Sell', accessor: 'sell' },
  { Header: 'Return ($)', accessor: 'returnD' },
  { Header: 'Return (%)', accessor: 'returnP' },
  { Header: 'Setup', accessor: 'setup' },
  { Header: 'PnL', accessor: 'pnl' },
];


function operations(): React.ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your operations' />
        <Button title='Add transaction' action='/' />
      </div>
      <Table columns={columns} />
    </div>
  );
}

export default operations;
