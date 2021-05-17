import React from 'react';
import Title from 'component/pageTitle';
import Tiles from 'component/tiles';

import assets from 'assets/analytics.json';

const analytics: React.FC = () => (
  <div className='pageContainer'>
    <Title title='Your analytics' />
    <Tiles data={assets} />
  </div>
);

export default analytics;
