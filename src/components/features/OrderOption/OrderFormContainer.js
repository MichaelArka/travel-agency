import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  // order: getOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (option) => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
