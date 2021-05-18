import styles from './getStyle.module.scss';

function getStyle(column: string, value: string) {
  if (column === 'pair') {
    return styles.pairFont;
  }

  if (column === 'status') {
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

  if (column === 'side') {
    if (value === 'Long') {
      return styles.upLabel;
    }
    if (value === 'Short') {
      return styles.downLabel;
    }
  }

  if (column === 'returnD' || column === 'returnP' || column === 'pnl') {
    if (parseInt(value, 10) >= 0) {
      return styles.positive;
    }
    return styles.negative;
  }

  if (column === 'action') {
    if (value === 'Buy') {
      return styles.positive;
    }
    if (value === 'Sell') {
      return styles.negative;
    }
  }

  return '';
}

export default getStyle;
