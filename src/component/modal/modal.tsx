import { useState } from 'react';
import styles from './modal.module.scss';

function modal({ dropdownOptions }): React.ReactElement {
  const [showOnlyOpen, toggleShowOnlyOpen] = useState(false);
  return (
    <div className={styles.modal}>
      <div>
        <label htmlFor='onlyOpen'>Show only open positions
          <input
            type='checkbox'
            id='onlyOpen'
            name='onlyOpen'
            {...showOnlyOpen ? 'checked' : ''}
            onClick={() => toggleShowOnlyOpen(!showOnlyOpen)}
          />
        </label>
      </div>

      <div>
        <label htmlFor='options'>Year
          <select name='options' id='options'>
            <option value=''>Select</option>
            {
              dropdownOptions.map((option) => (
                <option value={option} key={option}>{option}</option>
              ))
            }
          </select>
        </label>
      </div>
    </div>
  );
}
export default modal;
