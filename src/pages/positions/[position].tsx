import React, { ReactElement, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Title from 'component/title/page/page';
import CreateButton from 'component/button/create/create';
import BreadCrumb from 'component/breadcrumb/breadcrumb';
import CategoryTitle from 'component/title/category/category';
import PositionResume from 'component/table/positionResume/positionResume';
import PositionHistory from 'component/table/positionHistory/positionHistory';
import Targets from 'component/table/targets/targets';
import AddAction from 'component/modal/modal';
import { ThemeContext } from 'context/themeContext';
import { createPosition } from 'utils/fieldsDefinitions';
import { resume, history, targets } from 'utils/columnsDefinitions';

function Position(): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { position } = router.query;
  const TvChart = dynamic(() =>
    import('component/chart/tradingView/Widget'), { ssr: false }
  );
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? 'dark' : 'light';

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
        <TvChart symbol='BTCUSDT' theme={theme} />
      </div>

      {
        isModalOpen &&
        <AddAction
          title='Add action'
          buttonType='Add'
          action={setIsModalOpen}
          fields={createPosition} />
      }
    </div>
  );
}

export default Position;
