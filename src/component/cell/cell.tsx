import getStyle from 'utils/styling';
import styles from './cell.module.scss';

function Cell(props): React.ReactElement {
  const { object } = props;

  return (
    <td {...object.getCellProps()} className={styles.cell}>
      <div
        className={getStyle(object.column.id, object.value)}
      >{object.render('Cell')}
      </div>
    </td>
  );
}

export default Cell;
