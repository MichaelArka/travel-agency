import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id} value={value.id}>
        {value.name} {value.price} $
        <input 
          type="checkbox" 
          value={value.id}
          onChange={event => setOptionValue(event.currentTarget.value)}
          // checked={currentValue.includes(value.id)}

          >

          </input>
        </label>
    ))}
  </div>
);

export default OrderOptionCheckboxes;