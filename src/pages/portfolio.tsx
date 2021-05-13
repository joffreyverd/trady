import React from 'react';
import Title from '../component/pageTitle';
import AccountBalance from '../component/resume';
import Doughnut from '../component/doughnut';
import AssetsList from '../component/list';

const sections = [
  { title: 'Current Balance', value: '$5000' },
  { title: 'Fiat/Stable', value: '$3000' },
  { title: 'Crypto', value: '$2000' },
];

const portfolio: React.FC = () => (
  <div className='pageContainer'>
    <Title title='Your portfolio' />
    <AccountBalance sections={sections} />
    <div className='flexContainer'>
      <Doughnut />
      <AssetsList />
    </div>
  </div>

);

export default portfolio;
