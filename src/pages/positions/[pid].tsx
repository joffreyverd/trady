import React from 'react';
import { useRouter } from 'next/router';
import Title from '../../component/pageTitle';

const position: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className='pageContainer'>
      <Title title='Your position' />
      <p>The following position has been asked: {pid}</p>
    </div>
  );
};

export default position;
