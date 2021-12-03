import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({required, currentValue, setOptionValue, values}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick = {() => setOptionValue('')}>
        <Icon name="times-circle" />none
      </div>
    )}
    {values.map(value => (
      <div key={value.id} className={currentValue===value.id ? 
        styles.iconActive : styles.icon}
      onClick={() => setOptionValue(value.id)}
      
      >

        <Icon name={value.icon}/>
        {value.name}
        ({formatPrice(value.price)})
        
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionIcons;