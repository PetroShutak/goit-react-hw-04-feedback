import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrapper } from './FeedbackOptions.styled';
import { FaThumbsUp, FaThumbsDown, FaMeh } from 'react-icons/fa';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const renderIcon = (option) => {
    switch (option) {
      case 'good' :
        return <FaThumbsUp />;
      case 'bad' :
        return <FaThumbsDown />;
      case 'neutral' :
        return <FaMeh />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      {options.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {renderIcon(option)}
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
