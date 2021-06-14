import React, { ReactElement, useContext } from 'react';
import Title from 'component/title/page/page';
import Bars from 'component/chart/bars/bars';
import CategoryTitle from 'component/title/category/category';
import MonthlyResume from 'component/table/monthlyResume/monthlyResume';
import Card from 'component/card/card';
import { monthlyHistory } from 'utils/columnsDefinitions';
import { PrivacyContext } from 'context/privacyContext';

function Reports(): ReactElement {
  const { privacyState } = useContext(PrivacyContext);

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your reports' />
      </div>

      <CategoryTitle title='Data' />
      { !privacyState ?
        <Bars />
        :
        <Card />
      }

      <CategoryTitle title='Detail' />
      <MonthlyResume columns={monthlyHistory} />
    </div>
  );
}

export default Reports;
