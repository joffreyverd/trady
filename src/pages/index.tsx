import React, { ReactElement } from 'react';
import Title from 'component/title/page';

function Main(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Welcome on Trady!' />
        <></>
      </div>
    </div>
  );
};

export default Main;
