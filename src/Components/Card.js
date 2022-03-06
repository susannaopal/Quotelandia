import React from 'react';
import '../CSS/Card.css';
import PropTypes from 'prop-types';

const Card = ({ text, author }) => {
  return (
    <div className='quote-card'>
      <h3>{text}</h3>
      <p>{author}</p>
    </div>
  )
};

export default Card;

Card.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};