import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  
  <div className={styles.component}>
    <input 
      placeholder = {'Type here...'}
      type="text"
      className={styles.input}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
      >
      </input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};

export default OrderOptionText;