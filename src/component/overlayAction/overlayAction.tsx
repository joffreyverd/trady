import { useState } from 'react';
import styles from './overlayAction.module.scss';
import FiltersModal from '../modal';

function changeFilterStyle(value:boolean, css:any) {
  return value ? css.highlight : '';
}

function overlayAction({ title }): React.ReactElement {
  const [showOnlyOpen, toggleShowOnlyOpen] = useState(false);
  const [year, setYear] = useState('');
  const [isModalOpen, toggleModal] = useState(false);
  const isFilterActive = year !== '' || showOnlyOpen;

  const options = [
    {
      id: 0,
      label: 'Only show open positions',
      type: 'checkbox',
      values: [true, false],
      state: showOnlyOpen,
      setState: toggleShowOnlyOpen,
    },
    {
      id: 1,
      label: 'Year',
      type: 'dropdown',
      values: [2020, 2021],
      state: year,
      setState: setYear,
    },
  ];

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${changeFilterStyle(isFilterActive, styles)}`}
        onClick={() => toggleModal(!isModalOpen)}
      >{title}
      </button>
      { isModalOpen ?
        <FiltersModal title='Filters' options={options} /> : ''}
    </>
  );
}
export default overlayAction;
