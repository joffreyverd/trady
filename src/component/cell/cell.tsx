import getStyle from 'utils/styling';
import styles from './cell.module.scss';

const dollarColumns = ['returnD', 'value', 'fees', 'price', 'cost', 'pnl'];
const percentColumns = ['returnP'];

function Cell(props): React.ReactElement {
  const { object } = props;

  return (
    <td {...object.getCellProps()} className={styles.cell}>
      <div className={getStyle(object.column.id, object.value)}>
        {object.value && dollarColumns.includes(object.column.id) ? '$ ' : ''}
        {object.render('Cell')}
        {object.value && percentColumns.includes(object.column.id) ? ' %' : ''}
      </div>
    </ td>
  )
}

export default Cell;
