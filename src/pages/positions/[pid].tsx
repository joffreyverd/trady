import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'component/pageTitle';
import Button from 'component/button';
import BreadCrumb from 'component/breadcrumb';
import CategoryTitle from 'component/categoryTitle';
import ResumePositionsTable from 'component/resumePositionTable';
import HistoryPositionsTable from 'component/historyPositionTable';
import TargetsTable from 'component/targetsTable';

const resumeColumns = [
  { Header: 'Status', accessor: 'status' },
  { Header: 'Side', accessor: 'side' },
  { Header: 'Pair', accessor: 'pair' },
  { Header: 'Size', accessor: 'size' },
  { Header: 'Cost', accessor: 'cost' },
  { Header: 'Average Entry', accessor: 'averageEntryPrice' },
  { Header: 'Average Exit', accessor: 'averageExitPrice' },
  { Header: 'Return $', accessor: 'returnD' },
  { Header: 'Return %', accessor: 'returnP' },
];

const historyColumns = [
  { Header: 'Action', accessor: 'action' },
  { Header: 'Date', accessor: 'date' },
  { Header: 'Time', accessor: 'time' },
  { Header: 'Size', accessor: 'size' },
  { Header: 'Price $', accessor: 'price' },
  { Header: 'Value $', accessor: 'value' },
  { Header: 'Fees $', accessor: 'fees' },
];

const targetsColumns = [
  { Header: 'Action', accessor: 'action' },
  { Header: 'Size', accessor: 'size' },
  { Header: 'Price $', accessor: 'price' },
  { Header: 'Value $', accessor: 'value' },
  { Header: 'Return $', accessor: 'returnD' },
  { Header: 'Return %', accessor: 'returnP' },
]

function Position() {
  const router = useRouter();
  const { pid } = router.query;
  const TvChart = dynamic(() => import('../../component/tradingViewChart'), { ssr: false });

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

        <CategoryTitle title='Targets' />
        <TargetsTable columns={targetsColumns} />

        <CategoryTitle title='Chart' />
        <div className='TVContainer'>
          <TvChart symbol='ETHUSDT' />
        </div>
      </div>
    </>
  );
};

export default Position;
