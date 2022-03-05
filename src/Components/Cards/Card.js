import React from 'react';
import './Card.css';

const Card = ({ text, author, id }) => {
  return (
    <div className='quote-card'>
      <h3>{text}</h3>
      <p>{author}</p>
    </div>
  )
};

export default Card;

