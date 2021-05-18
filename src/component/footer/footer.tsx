import React, { ReactElement } from 'react';
import styles from './footer.module.scss';

function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <a
        href='https://github.com/joffreyverd/trady'
        target='_blank'
        rel='noreferrer'
      >
        Trady is an open-source project
    </a>
    </div>
  );
}

export default Footer;
