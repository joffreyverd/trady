import React from 'react';
import Title from 'component/pageTitle';
import MontlyCalendar from 'component/calendar';

const calendar: React.FC = () => (
  <div className='pageContainer'>
    <Title title='Your trading calendar' />
    <MontlyCalendar />
  </div>
);

export default calendar;
