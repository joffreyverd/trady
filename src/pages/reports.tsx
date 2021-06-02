import React, { ReactElement, useContext } from 'react';
import Title from 'component/title/page/page';
import Bars from 'component/chart/bars/bars';
import CategoryTitle from 'component/title/category/category';
import MonthlyResume from 'component/table/monthlyResume/monthlyResume';
import { monthlyHistory } from 'utils/columnsDefinitions';
import { PrivacyContext } from 'context/privacyContext/privacyContext';

function Reports(): ReactElement {
  const { privacyState } = useContext(PrivacyContext);

  return (
    <div className='pageContainer'>
      <div className='flexContainer titleAndAction'>
        <Title title='Your reports' />
      </div>

      { !privacyState &&
        <>
          <CategoryTitle title='Data' />
          <Bars />
        </>
      }

      <CategoryTitle title='Detail' />
      <MonthlyResume columns={monthlyHistory} />
    </div>
  );
}

export default Reports;
