import React from 'react';
import Title from 'component/pageTitle';
import MontlyCalendar from 'component/monthlyCalendar';

const calendar: React.FC = () => (
  <div className='pageContainer'>
    <div className='flexContainer titleAndAction'>
      <Title title='Your trading calendar' />
      <></>
    </div>
    <MontlyCalendar />
  </div>
);

export default calendar;
