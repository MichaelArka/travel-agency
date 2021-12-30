import React from "react";
import styles from './DaysToSummer.module.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {

  getCountdownTime(){
  
    // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    const countDownDate = new Date(Date.UTC(2022, 5, 21)).getTime();
    // var countDownDate = new Date(Date.UTC(2021, 11, 20)).getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (distance > 1) {
      const daysLeft = 'Days left';
      return days + ' ' + daysLeft;
     } else {
      const oneDayLeft = 'One day left'
      return oneDayLeft;
    };

    // } else if (distance === 1) {
    //   const oneDayLeft = 'One day left'
    //   return oneDayLeft;
  
    // const daysLeft = 'Days left'
    // Display the result
    // /return days + ' ' + daysLeft;
  };

  render() {
    let getCountdownTime = this.getCountdownTime();
    let { title } = this.props;
    return (
      <div className={styles.component} >
        <div className={styles.title}>{title}</div>
        <div className={styles.days}>{getCountdownTime}</div>
      </div>
    );
  };
};

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;
