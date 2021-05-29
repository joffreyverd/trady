import styles from './getStyle.module.scss';

function getStatusStyle(value: string) {
  if (value === 'Win') {
    return styles.validLabel;
  }
  if (value === 'Loss') {
    return styles.dangerLabel;
  }
  if (value === 'Open') {
    return styles.warningLabel;
  }
}

function getStyle(column: string, value: string) {
  if (column === 'pair') {
    return styles.pairFont;
  }
  if (column === 'status') {
    return getStatusStyle(value);
  }
  if (column === 'side') {
    return value === 'Long' ? styles.upLabel : styles.downLabel;
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
