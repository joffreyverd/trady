import React, { useState } from 'react';
import styles from './tooltip.module.scss';

const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false);
  const isTooltipVisible = show ?
    `${styles.tooltipBox} ${styles.visible}` : `${styles.tooltipBox}`;

  return (
    <div className={styles.tooltipContainer}>
      <div className={isTooltipVisible}>{text}</div>
      <div
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
