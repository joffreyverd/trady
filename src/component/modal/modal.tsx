import { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss';

interface Options {
  id: number,
  label: string,
  type: string,
  values: [],
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
}

interface Props {
  title: string,
  options: Options[],
}

function Modal({ title, options }): React.ReactElement<Props> {
  return (
    <div className={styles.modal}>
      <h3>{title}</h3>
      {
        options.map((option) => (
          option.type === 'checkbox' ?
            <div key={option.id}>
              <label htmlFor={option.id}>
                <p>{option.label}</p>
                <input
                  type='checkbox'
                  id={option.id}
                  name={option.id}
                  defaultChecked={option.state}
                  onChange={() => option.setState(!option.state)}
                />
              </label>
            </div>

            : option.type === 'dropdown' ?
              <div key={option.id}>
                <label htmlFor='options'>
                  <p>{option.label}</p>
                  <select
                    name='options'
                    id='options'
                    defaultValue={option.state}
                    onChange={(e) => { option.setState(e.target.value); }}
                  >
                    <option value=''>Select</option>
                    {
                      option.values.map((value) => (
                        <option value={value} key={value}>{value}</option>
                      ))
                    }
                  </select>
                </label>
              </div>
              : ''
        ))
      }
    </div>
  );
}
export default Modal;
