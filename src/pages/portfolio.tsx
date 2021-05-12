import React from 'react';
import PageTitle from '../component/pageTitle';
import Resume from '../component/resume';
import Doughnut from '../component/doughnut';

const sections = [
  { title: 'Current Balance', value: '$5000' },
  { title: 'Fiat/Stable', value: '$3000' },
  { title: 'Crypto', value: '$2000' },
];

const portfolio: React.FC = () => (
  <div className='pageContainer'>
    <PageTitle title='Your portfolio' />
    <Resume sections={sections} />
    <Doughnut />
  </div>

);

export default portfolio;
