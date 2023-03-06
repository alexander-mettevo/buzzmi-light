import React from 'react';
import styles from './arrow.module.scss'

const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <div className={styles["arrow-top"]}/>
      <div className={styles["arrow-bottom"]}/>
    </div>
  );
};

export default Arrow;