import React, { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'component/title/page';
import CreateButton from 'component/button/create';
import BreadCrumb from 'component/breadcrumb';
import CategoryTitle from 'component/title/category';
import PositionResume from 'component/table/positionResume';
import PositionHistory from 'component/table/positionHistory';
import Targets from 'component/table/targets';
import AddAction from 'component/modal';
import { createPosition } from 'utils/fieldsDefinitions';
import { resume, history, targets } from 'utils/columnsDefinitions';

function Position(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { position } = router.query;
  const TvChart = dynamic(() =>
    import('component/chart/tradingView'), { ssr: false }
  );

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your position' />
        <CreateButton title='Add action' action={setIsModalOpen} />
      </div>
      <BreadCrumb
        path='/operations'
        name='operations'
        current={`position ${position}`} />

      <CategoryTitle title='Resume' />
      <PositionResume columns={resume} />

      <CategoryTitle title='History' />
      <PositionHistory columns={history} />

      <CategoryTitle title='Targets' />
      <Targets columns={targets} />

      <CategoryTitle title='Chart' />
      <div className='TVContainer'>
        <TvChart symbol='BTCUSDT' />
      </div>

      {
        isModalOpen &&
        <AddAction
          title='Add action'
          action={setIsModalOpen}
          fields={createPosition} />
      }
    </div>
  );
}

export default Position;
