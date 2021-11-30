import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({required, setOptionValue, values}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick = {() => setOptionValue('')}>
        <Icon name="times-circle" />none
      </div>
    )}
    {values.map(value => (
      <div key={value.id} value={value.id}>{value.name}</div>
    ))}
  </div>
);

export default OrderOptionIcons;