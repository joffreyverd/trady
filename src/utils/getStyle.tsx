import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import styles from './getStyle.module.scss';

function getStatusStyle(value: string): string {
  if (value === 'Win') {
    return styles.validLabel;
  }
  if (value === 'Loss') {
    return styles.dangerLabel;
  }
  if (value === 'Open') {
    return styles.warningLabel;
  }
  return '';
}

function getStyle(column: string, value: string): string {
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;

  if (column === 'pair') {
    return styles.pairFont;
  }
  if (column === 'status') {
    return getStatusStyle(value);
  }
  if (column === 'side') {
    const label = value === 'Long' ? styles.upLabel : styles.downLabel;
    return `${label} ${theme}`;
  }
  if (column === 'returnD' || column === 'returnP' || column === 'pnl') {
    return parseInt(value, 10) >= 0 ? styles.positive : styles.negative;
  }
  if (column === 'action') {
    return value === 'Buy' ? styles.positive : styles.negative;
  }
  if (column === 'month') {
    return styles.month;
  }
  return '';
}

export default getStyle;
