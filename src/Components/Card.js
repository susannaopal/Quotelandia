import React from 'react';
import '../CSS/Card.css';
import PropTypes from 'prop-types';

const Card = ({ text, author }) => {
  return (
    <div className='quote-card'>
      <h3 className='quote-text'>{text}</h3>
      <p className='author-name'>{author}</p>
    </div>
  )
};

export default Card;

Card.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};