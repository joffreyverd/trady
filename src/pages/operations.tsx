import React from 'react';
import Button from '../component/button';
import PageTitle from '../component/pageTitle';

const operations: React.FC = () => (
  <div className='pageContainer'>
    <PageTitle title='Your operations' />
    <Button title='Add a transaction' action='/' />
  </div>
);

export default operations;
