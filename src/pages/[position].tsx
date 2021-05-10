import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const position: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <p>The following position has been asked: {router.query.position}</p>
      <Link href='/'><a>Home</a></Link>
    </div>
  );
};

export default position;
