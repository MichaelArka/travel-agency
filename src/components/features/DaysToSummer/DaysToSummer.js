import React from "react";
import styles from './DaysToSummer.module.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class DaysToSummer extends React.Component {

  // getCountdownTime(){
  //   const currentTime = new Date();
  //   const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
  //   if(currentTime.getUTCHours() >= 12){
  //     nextNoon.setUTCDate(currentTime.getUTCDate()+1);
  //   }
  
  //   return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  // }
//   getCountdownTime(){
//   var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
  
//   var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   return (days);
  
//   }, 1000);
// }

  render() {
    // let getCountdownTime = this.getCountdownTime();
    let { promoDescription, title, summer} = this.props;
    return (
      <div className={styles.component} >
        <div className={styles.title}>{title}</div>
        <div className={styles.days}>{}</div>
      </div>
    );
  };
};

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;

// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
