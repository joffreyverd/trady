import React, { ReactElement } from 'react';
import Title from 'component/title/page';
import Bars from 'component/chart/bars';
import CategoryTitle from 'component/title/category';
import MonthlyResume from 'component/table/monthlyResume';
import { monthlyHistory } from 'utils/columnsDefinitions';

function Reports(): ReactElement {
  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your reports' />
      </div>

      <CategoryTitle title='Data' />
      <Bars />

      <CategoryTitle title='Detail' />
      <MonthlyResume columns={monthlyHistory} />
    </div>
  );
}

export default Reports;
