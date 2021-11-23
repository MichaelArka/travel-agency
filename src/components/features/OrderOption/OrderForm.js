import {Row, Col} from 'react-flexbox-grid';
import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (props) => (
  
    <Row>
      <Col xs={12}>
        <OrderSummary options={props.options} tripCost={props.tripCost} />
      </Col>
    </Row>
);

export default OrderForm;
