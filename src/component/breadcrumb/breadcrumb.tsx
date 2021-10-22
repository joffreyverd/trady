import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './breadcrumb.module.scss';

type Props = {
  path: string,
  name: string,
  current: string
};

function BreadCrumb(props: Props): ReactElement {
  const { path, name, current } = props;

  return (
    <div className={styles.breadcrumbContainer}>
      <Link href='/'>Home </Link>
      <p>/</p>
      <Link href={path}>{name}</Link>
      <p>/ {current}</p>
    </div>
  );
}

export default BreadCrumb;
