import React from 'react';
import PropTypes from 'prop-types';
// import css from './Notification.module.css';
import { getRandomColor } from '../../utils/getRandom';

const Notification = ({ message }) => {
  return (
    <div style={{ backgroundColor: getRandomColor() }}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;


