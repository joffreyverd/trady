import React, { ReactElement } from 'react';
import styles from '../filters.module.scss';

function Dropdown({ option }): ReactElement<FiltersOptions> {
    return (
        <div key={option.id} className={styles.filterContainer}>
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
    );
}
export default Dropdown;
