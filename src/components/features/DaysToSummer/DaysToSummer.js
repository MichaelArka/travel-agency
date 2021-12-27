import React from "react";
import styles from './DaysToSummer.module.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    let getCountdownTime = this.getCountdownTime();
    let { promoDescription, title } = this.props;
    return (
      <div className={styles.component} >
        <div className={styles.title}>{title}</div>
        <div className={styles.days}></div>
      </div>
    );
  };
};

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;