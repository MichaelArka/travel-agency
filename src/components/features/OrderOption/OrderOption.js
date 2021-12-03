import React from 'react';
import styles from './OrderOption.module.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import { setOrderOption } from '../../../redux/orderRedux';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  setOrderOption: setOrderOption,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({name, props, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    console.log('test')
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={(value) => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

// const OrderOption = () => (

//   <div className={styles.component}>
//     <h3 className={styles.title}>Car Rental</h3>
//   </div>
// );

export default OrderOption;