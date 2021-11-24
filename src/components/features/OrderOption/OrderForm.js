import {Row, Col} from 'react-flexbox-grid';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from './OrderOption';
import { setOrderOption } from '../../../redux/orderRedux';

const OrderForm = (props) => (
  
  <Row>
    {pricing.map((pricingOption) => (
      <Col md={4} key={pricingOption.id}>
        <OrderOption setOrderOption={setOrderOption}/>
      </Col>
    ))}
      <Col md={4}>
        <OrderSummary options={props.options} tripCost={props.tripCost} />
      </Col>
  </Row>
);

export default OrderForm;