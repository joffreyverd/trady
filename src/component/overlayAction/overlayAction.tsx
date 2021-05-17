import { useState } from 'react';
import styles from './overlayAction.module.scss';
import FiltersModal from '../modal';

interface Options {
  id: number,
  label: string,
  type: string,
  values: [],
  state: any,
  setState: Function,
}

interface Props {
  title: string,
  options: Options[],
  isActive: boolean,
}

function overlayAction({ title, options, isActive }): React.ReactElement<Props> {
  const [isModalOpen, toggleModal] = useState(false);
  const isActiveFilter = isActive ? styles.highlight : '';

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${isActiveFilter}`}
        onClick={() => toggleModal(!isModalOpen)}
      >{title}
      </button>
      { isModalOpen ?
        <FiltersModal title='Filters' options={options} /> : ''}
    </>
  );
}
export default overlayAction;
