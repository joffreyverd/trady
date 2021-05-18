import React, { ReactElement } from 'react';
import styles from './category.module.scss';

interface Props {
  title: string,
}

function Category(props: Props): ReactElement {
  const { title } = props;
  return (
    <h2 className={styles.title}>{title}</h2>
  );
}

export default Category;
