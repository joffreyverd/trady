import styles from './cell.module.scss';
import getStyle from '../../utils/styling';

interface Props {
  object: any,
}

function Cell(props:Props) {
  const { object } = props;

  return (
    <td
      {...object.getCellProps()}
      className={styles.cell}
    >
      <div
        className={getStyle(object.column.id, object.value)}
      >{object.render('Cell')}
      </div>
    </td>
  );
}

export default Cell;
