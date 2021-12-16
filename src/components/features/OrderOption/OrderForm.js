import {Row, Col} from 'react-flexbox-grid';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from './OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import PropTypes from 'prop-types';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = (props, options, tripCost) => (
  
  <Row>
    {pricing.map((pricingOption) => (
      <Col md={4} key={pricingOption.id}>
        <OrderOption 
        {...pricingOption}
        setOrderOption={props.setOrderOption}
        currentValue={props.options[pricingOption.id]}/>
      </Col>
    ))}
      <Col md={4}>
        <OrderSummary options={props.options} tripCost={props.tripCost} />
        <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
      </Col>
  </Row>
);

OrderForm.propTypes = {
  props: PropTypes.string,
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;