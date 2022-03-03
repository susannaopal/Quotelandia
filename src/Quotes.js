import React from 'react';
import Card from './Card';
import './Quotes.css';
import { Link } from 'react-router-dom';


const Quotes = ({quotes}) => {

  const quoteCards = quotes.map((quote, index) => {
    return (
      <Card
        text={quote.text}
        author={quote.author}
        id={index}
        key={index}
      />
    )
  })

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
}

export default Quotes;