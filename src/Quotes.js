import React from 'react';
import Card from './Card'

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
    <div className='quotes-container'>
      {quoteCards}
    </div>
  )
}

export default Quotes;