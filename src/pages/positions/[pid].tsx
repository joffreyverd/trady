import React from 'react';
import { useRouter } from 'next/router';
import Title from 'component/pageTitle';
import Button from 'component/button';
import BreadCrumb from 'component/breadcrumb';
import HistoryPositionsTable from 'component/historyPositionTable';
import ResumePositionsTable from 'component/resumePositionTable';
import CategoryTitle from 'component/categoryTitle';

const resumeColumns = [
  { Header: 'Status', accessor: 'status' },
  { Header: 'Side', accessor: 'side' },
  { Header: 'Size', accessor: 'size' },
  { Header: 'Cost', accessor: 'cost' },
  { Header: 'Average Entry ($)', accessor: 'averageEntryPrice' },
  { Header: 'Average Exit ($)', accessor: 'averageExitPrice' },
  { Header: 'Return ($)', accessor: 'returnD' },
  { Header: 'Return (%)', accessor: 'returnP' },
];

const historyColumns = [
  { Header: 'Action', accessor: 'action' },
  { Header: 'Open Date', accessor: 'open' },
  { Header: 'Time', accessor: 'time' },
  { Header: 'Size', accessor: 'size' },
  { Header: 'Price ($)', accessor: 'price' },
  { Header: 'Value ($)', accessor: 'value' },
  { Header: 'Fees ($)', accessor: 'fees' },
];

function Position() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <div className='pageContainer'>
        <div className='flexContainer titleAndAction'>
          <Title title='Your position' />
          <Button title='Add action' action='/' />
        </div>
        <BreadCrumb path='/operations' name='operations' current={`position ${pid}`} />

        <CategoryTitle title='Resume' />
        <ResumePositionsTable columns={resumeColumns} />

        <CategoryTitle title='History' />
        <HistoryPositionsTable columns={historyColumns} />
      </div>
    </>
  );
};

export default Position;
