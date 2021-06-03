import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import Title from 'component/title/page/page';

function Main(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? 'dark' : 'light';

  return (
    <div className={`pageContainer ${theme}`}>
      <div className='flexContainer titleAndAction'>
        <Title title='Welcome on Trady!' />
        <></>
      </div>
    </div>
  );
}

export default Main;
