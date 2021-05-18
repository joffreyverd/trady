import React, { ReactElement } from 'react';
import Title from 'component/title/page';
import MontlyCalendar from 'component/monthlyCalendar';

function Calendar(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your trading calendar' />
        <></>
      </div>
      <MontlyCalendar />
    </div>
  );
};

export default Calendar;
