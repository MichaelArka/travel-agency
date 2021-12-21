// import React from 'react';
// import styles from './OrderOption.module.scss';
// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

// const OrderOptionText = ({setOptionValue}) => (
  
//   <div className={styles.component}>
//     <input 
//       placeholder='enter text'
//       type="text"
//       className={styles.input}
//       onChange={(event) => setOptionValue(event.currentTarget.value)}
//       >
//       </input>
//   </div>
// );

// OrderOptionText.propTypes = {
//   setOptionValue: PropTypes.func,
// };

// export default OrderOptionText;

import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { render } from 'enzyme';

const schema = yup.object().shape({
  username: yup.string().required(),
  phone: yup.string().required(),
});

export default function OrderOptionText({setOptionValue}) {
  const { register, handleSubmit, errors } = useForm({
    resolver:yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className='App'>
      
  <form onSubmit={handleSubmit(onSubmit)}>
  
    return(
      <div className={styles.component}>
      <input  
        placeholder='enter text'
        type="text"
        // ref={register}
        className={styles.input}
        onChange={(event) => setOptionValue(event.currentTarget.value)}
        >
        </input>
    </div>
    
    )
</form>
</div>)};
      
OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

// export default OrderOptionText;