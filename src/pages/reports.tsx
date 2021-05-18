import React, { ReactElement } from 'react';
import Title from 'component/title/page';

function Reports(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your reports' />
        <></>
      </div>
      <p>This feature is ongoing 🤯</p>
    </div>
  );
}

export default Reports;
