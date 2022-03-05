import React from 'react';
import Card from './Card.js';
import '../CSS/Quotes.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Quotes = ({quotes}) => {

  const quoteCards = quotes.map((quote, index) => {
    return (
      <Card
        text={quote.text}
        author={quote.author}
        id={index}
        key={index}
      />
    );
  });

  return (
    <>
     <Link to='/'>
        <button className='home-btn'>Return Home</button>
      </Link>
      <div className='quotes-container'>
        {quoteCards}
      </div>
    </>
  )
};

export default Quotes;

Quotes.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
};