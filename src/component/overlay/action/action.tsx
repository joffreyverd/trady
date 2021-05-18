import React, { useState, Dispatch, SetStateAction, ReactElement } from 'react';
import styles from './action.module.scss';
import FiltersModal from '../../modal';

interface Option {
  id: number,
  label: string,
  type: string,
  values: [],
  state: boolean | string,
  setState: Dispatch<SetStateAction<any>>,
}

interface Props {
  title: string,
  options: Option[],
  isActive: boolean,
}

function OverlayAction({ title, options, isActive }): ReactElement<Props> {
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
export default OverlayAction;
