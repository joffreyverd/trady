import React, { ReactElement } from 'react';
import Title from 'component/title/page/page';
import AccountBalance from 'component/resume/resume';
import Doughnut from 'component/chart/doughnut/doughnut';
import AssetsList from 'component/list/list';

const sections = [
  { title: 'Current Balance', value: '5000' },
  { title: 'Fiat/Stable', value: '3000' },
  { title: 'Crypto', value: '2000' },
];

function Portfolio(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your portfolio' />
        <></>
      </div>
      <AccountBalance sections={sections} />
      <div className='flexContainer'>
        <Doughnut />
        <AssetsList />
      </div>
    </div>
  );
}

export default Portfolio;
