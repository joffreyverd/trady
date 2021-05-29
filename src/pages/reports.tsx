import React, { ReactElement } from 'react';
import Title from 'component/title/page';
import Bars from 'component/chart/bars';

function Reports(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your reports' />
      </div>
      <Bars />
    </div>
  );
}

export default Reports;
