import { useState, useEffect } from 'react';
import styles from './overlayAction.module.scss';
import FiltersModal from '../modal';

interface Props {
  title: string,
  actionOnChange: Function,
  years: [],
}

function overlayAction({ title, actionOnChange, years }): React.ReactElement<Props> {
  const [onlyShowOpen, toggleOnlyShowOpen] = useState(false);
  const [year, setYear] = useState('');
  const [isModalOpen, toggleModal] = useState(false);
  const isFilterActive = year !== '' || onlyShowOpen ? styles.highlight : '';

  const options = [
    {
      id: 0,
      label: 'Only show open positions',
      type: 'checkbox',
      values: [true, false],
      state: onlyShowOpen,
      setState: toggleOnlyShowOpen,
    },
    {
      id: 1,
      label: 'Year',
      type: 'dropdown',
      values: years,
      state: year,
      setState: setYear,
    },
  ];

  useEffect(() => {
    actionOnChange(onlyShowOpen, year);
  }, [onlyShowOpen, year]);

  return (
    <>
      <button
        type='button'
        className={`${styles.button} ${isFilterActive}`}
        onClick={() => toggleModal(!isModalOpen)}
      >{title}
      </button>
      { isModalOpen ?
        <FiltersModal title='Filters' options={options} /> : ''}
    </>
  );
}
export default overlayAction;
