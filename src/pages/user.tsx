import React, { ReactElement } from 'react';
import Title from 'component/title/page/page';

function User(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your settings' />
        <></>
      </div>
    </div>
  );
}

export default User;
