import React from 'react';
import PropTypes from 'prop-types';
import { NotificationWrapper, NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
