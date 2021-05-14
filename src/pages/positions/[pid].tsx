import React from 'react';
import { useRouter } from 'next/router';
import Title from '../../component/pageTitle';
import BreadCrumb from '../../component/breadcrumb';

const position: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className='pageContainer'>
      <Title title='Your position' />
      <BreadCrumb path='/operations' name='operations' current={`position ${pid}`} />
    </div>
  );
};

export default position;
