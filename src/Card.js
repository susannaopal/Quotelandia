import React from 'react';

const Card = ({ text, author, id }) => {
  return (
    <div className='card'>
      <h3>{text}</h3>
      <p>{author}</p>
    </div>
  )
}

export default Card;

