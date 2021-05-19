import React, { ReactElement } from 'react';
import styles from '../filters.module.scss';

function Checkbox({ option }): ReactElement {
    return (
        <div key={option.id} className={styles.filterContainer}>
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
    );
}
export default Checkbox;