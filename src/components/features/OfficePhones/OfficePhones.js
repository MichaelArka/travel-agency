import React from "react";
import styles from './OfficePhones.module.scss';
import PropTypes from 'prop-types';

class OfficePhones extends React.Component {

  phones(){
    
  };

  render() {
    let phones = this.phones();
    return (
      <div className={styles.component}>
        <div className={styles.phones}>{phones}</div>
      </div>
    );
  };

};

OfficePhones.propTypes = {
  title: PropTypes.string,
};

export default OfficePhones;