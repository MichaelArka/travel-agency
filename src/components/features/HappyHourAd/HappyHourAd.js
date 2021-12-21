import React from "react";
import styles from './HappyHourAd.module.scss';
import PropTypes from 'prop-types';

class HappyHoursAd extends React.Component {

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    return (
      <div className={styles.component} >
        <h3 className={styles.title} title="title">title</h3>
        <div className={styles.promoDescription}>{this.getCountdownTime()}</div>
      </div>
    );
  };
};

HappyHoursAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHoursAd;