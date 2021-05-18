import React, { ReactElement } from 'react';
import styles from './resume.module.scss';

interface Balance {
  title: string,
  value: string
}

interface Props {
  sections: Balance[],
}

function Resume(props: Props): ReactElement {
  const { sections } = props;
  return (
    <div className={styles.resumeContainer}>
      {
        sections.map((section) => (
          <div className={styles.item} key={section.title}>
            <h2>{section.title}</h2>
            <p className={styles.amout}>$ {section.value}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Resume;
