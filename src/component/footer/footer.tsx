import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import styles from './footer.module.scss';

function Footer(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  return (
    <div className={`${styles.footer} ${theme}`}>
      <a
        href='https://github.com/joffreyverd/trady'
        target='_blank'
        rel='noreferrer'>
        Trady is an open-source project
    </a>
    </div>
  );
}

export default Footer;
