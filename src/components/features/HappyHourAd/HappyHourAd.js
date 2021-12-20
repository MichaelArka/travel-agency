import React from "react";
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHoursAd extends React.Component {

  render() {
    return (
      <div>
        <h3 className={styles.title}>
          HappyHours
        </h3>
        <div className={styles.countdown}>

        </div>
      </div>
    );
  };
};

export default HappyHoursAd;