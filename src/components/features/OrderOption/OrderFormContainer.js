import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '/Projects/travel-agency-v2/src/redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  // order: getOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (option) => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
