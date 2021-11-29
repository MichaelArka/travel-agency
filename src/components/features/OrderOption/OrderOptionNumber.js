import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
// import limits from '../../../data/pricing.json';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type="number"
      value={currentValue}
       min={limits.min} 
       max={limits.max}
       onChange={event => setOptionValue(event.currentTarget.value)}
      >
        
      </input>
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.number,
  limits: PropTypes.object,
};

export default OrderOptionNumber;