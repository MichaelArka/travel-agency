/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './Hero.module.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} alt="hero-image" src={imageSrc} />
    <div className={styles.happyHour}><HappyHourAd title={"Happy Hour!"} promoDescription={"test description"}/> </div>
    <div className={styles.daysToSummer}><DaysToSummer /></div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  promoDescription: PropTypes.string,
  title: PropTypes.string,
};

export default Hero;
