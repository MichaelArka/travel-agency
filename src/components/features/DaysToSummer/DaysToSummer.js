import React from "react";
import styles from './DaysToSummer.module.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {

  getCountdownTime(){
  
    // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    // let countDownDate = new Date(Date.UTC(2021, 11, 32)).getTime();

    const countDownDate = new Date(Date.UTC(2022, 5, 21)).getTime();

    const now = new Date().getTime();
    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // if (distance > 1) {
    //   const daysLeft = 'Days left';
    //   return days + ' ' + daysLeft;
    // } else {
    //   const oneDayLeft = 'One day left'
    //   return oneDayLeft;
    // }

    if (distance > 1) {
      
      return days;
    } else {
      const oneDayLeft = 'One day left'
      return oneDayLeft;
    }
  };

  showDays(){
    // const countDownDate = new Date(Date.UTC(2022, 5, 21)).getTime();
    const countDownDate = new Date(Date.UTC(2022, 0, 4)).getTime();

    const now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance > 0) {
      return 'Days left';
    } else if (distance === 0){
      return 'One day left';
    };
  };

  render() {
    let getCountdownTime = this.getCountdownTime();
    let showDays = this.showDays();
    let { title } = this.props;
    return (
      <div className={styles.component} >
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{showDays}</div>
        <div className={styles.days}>{getCountdownTime}</div>
      </div>
    );
  };
};

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;
