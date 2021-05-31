import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext/themeContext';
import styles from './resume.module.scss';

type Balance = {
  title: string,
  value: string
}

type Props = {
  sections: Balance[],
}

function Resume(props: Props): ReactElement {
  const { sections } = props;
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  return (
    <div className={`${styles.resumeContainer} ${theme}`}>
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
