import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionIcons = (values, icon) => (
  <div className={styles.component}>
    {values.map(value => (
      <div className={styles.icon} key={icon}></div>
    ))}
    <h3>OrderOptionIcons</h3>
  </div>
);

export default OrderOptionIcons;