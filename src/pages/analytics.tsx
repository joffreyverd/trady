import React, { ReactElement } from 'react';
import Title from 'component/title/page';
import Tiles from 'component/tiles';
import assets from 'assets/analytics.json';

function Analytics(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your analytics' />
        <></>
      </div>
      <Tiles data={assets} />
    </div>
  );
}

export default Analytics;

