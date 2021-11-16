import React from 'react';
import PropTypes from 'prop-types';
import styles from './SideImage.module.scss';

// eslint-disable-next-line jsx-a11y/alt-text
const SideImage = props => (<img  className={styles.component} src={`${props.source}`} />);

SideImage.propTypes = {
  source: PropTypes.string.isRequired,
};

export default SideImage;
