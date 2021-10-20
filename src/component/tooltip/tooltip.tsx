import React, { ReactElement, useState } from 'react';
import styles from './tooltip.module.scss';

type Props = {
  text: string,
  children: JSX.Element
};

const Tooltip = ({ children, text, ...rest }: Props): ReactElement => {
  const [show, setShow] = useState(false);
  const tooltipClass = show ?
    `${styles.tooltipBox} ${styles.visible}` : `${styles.tooltipBox}`;

  return (
    <div className={styles.tooltipContainer}>
      <div className={tooltipClass}>{text}</div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
