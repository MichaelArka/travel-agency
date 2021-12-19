// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import PropTypes from 'prop-types';

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const OrderOptionDate = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// OrderOptionDate.propType = {
//   date: PropTypes.string
// };

// export default OrderOptionDate;

import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.setOptionValue(date);
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  };
}

OrderOptionDate.propType = {
date: PropTypes.string
};

export default OrderOptionDate;