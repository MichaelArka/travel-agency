import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({required, setOptionValue, values}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick = {() => setOptionValue('')}>
        <Icon name="times-circle" />
      </div>
    )}
  </div>
);

export default OrderOptionIcons;