import { useState } from 'react';
import styles from './overlayAction.module.scss';
import FiltersModal from '../modal';

function overlayAction({ title }): React.ReactElement {
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <>
      <button
        type='button'
        className={styles.button}
        onClick={() => toggleModal(!isModalOpen)}
      >
        {title}
      </button>

      { isModalOpen ?
        <FiltersModal dropdownOptions={[2020, 2021]} /> : ''}
    </>
  );
}
export default overlayAction;
