import React, { ReactElement, useContext } from 'react';
import { PrivacyContext } from 'context/privacyContext';
import getStyle from 'utils/getStyle';
import styles from './cell.module.scss';

const dollarColumns = ['returnD', 'value', 'fees', 'price', 'cost', 'pnl'];
const percentColumns = ['returnP'];

function Cell(props): ReactElement {
  const { object } = props;
  const { privacyState } = useContext(PrivacyContext);

  function displayValue(value): string {
    if (dollarColumns.includes(object.column.id)) {
      return privacyState ? '*****' : value;
    }
    return value;
  }

  return (
    <td {...object.getCellProps()} className={styles.cell}>
      <div className={getStyle(object.column.id, object.value)}>
        {object.value && dollarColumns.includes(object.column.id) && '$ '}
        {displayValue(object.render('Cell'))}
        {object.value && percentColumns.includes(object.column.id) && ' %'}
      </div>
    </td>
  )
}

export default Cell;
