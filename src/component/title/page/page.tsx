import React, { ReactElement } from 'react';
import styles from './page.module.scss';

type Props = {
  title: string,
};

function Page(props: Props): ReactElement {
  const { title } = props;

  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

export default Page;
