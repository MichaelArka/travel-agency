import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import { input } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

const OrderOptionText = ({setOptionValue, name}) => (
  
  <div className={styles.component}>
    <input 
      placeholder = {<h3 className={styles.title}>{name}</h3>} // <-- zostawiam bo smiesznie wygląda, nie potrafię zrobić tak by placeholder wyświetlał w zaleznosci od inputu (phone lub YourName)
      type="text"
      required="" // <-- required nie działa, próbowałem z @hookform/resolvers i Yup, ale to zbyt skomplikowane :D
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