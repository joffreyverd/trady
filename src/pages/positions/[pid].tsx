import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'component/title/page';
import Button from 'component/button';
import BreadCrumb from 'component/breadcrumb';
import CategoryTitle from 'component/title/category';
import ResumePositions from 'component/table/positionResume';
import HistoryPositions from 'component/table/positionHistory';
import Targets from 'component/table/targets';
import { resume, history, targets } from 'utils/columnsDefinitions';

function Position(): ReactElement {
  const router = useRouter();
  const { pid } = router.query;
  const TvChart = dynamic(() =>
    import('../../component/chart/tradingView'),
    { ssr: false }
  );

  return (
    <>
      <div className='pageContainer'>
        <div className='flexContainer titleAndAction'>
          <Title title='Your position' />
          <Button title='Add action' action='/' />
        </div>
        <BreadCrumb
          path='/operations'
          name='operations'
          current={`position ${pid}`}
        />

        <CategoryTitle title='Resume' />
        <ResumePositions columns={resume} />

        <CategoryTitle title='History' />
        <HistoryPositions columns={history} />

        <CategoryTitle title='Targets' />
        <Targets columns={targets} />

        <CategoryTitle title='Chart' />
        <div className='TVContainer'>
          <TvChart symbol='BTCUSDT' />
        </div>
      </div>
    </>
  );
};

export default Position;
