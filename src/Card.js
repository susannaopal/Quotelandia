import React from 'react';

const Card = ({ title, description, id }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card;

