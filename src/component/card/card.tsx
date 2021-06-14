import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import styles from './card.module.scss';

function Card(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  return (
    <div className={`${styles.cardContainer} ${theme}`}>
      <div className={styles.message}>
        <VisibilityOffIcon />
        <p>Please turn off the privacy filter option to see this graphic.</p>
      </div>
    </div>
  );
}

export default Card;
