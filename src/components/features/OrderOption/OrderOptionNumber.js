import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
  
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type="number"
      value={currentValue}
       min={limits.min} 
       max={limits.max}
       onChange={event => setOptionValue(event.currentTarget.value)}
      >
      </input>
        {` Price: ${formatPrice(price)}`}
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;