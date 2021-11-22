import React from 'react';
import styles from '../OrderSummary/OrderSummary.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import PropTypes from 'prop-types';

const OrderSummary = ({cost, options}) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.node,
};

export default OrderSummary;