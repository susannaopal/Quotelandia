import React from 'react';
import Card from './Card'

const Quotes = ({quotes}) => {

  const quoteCards = quotes.map(quote => {
    return (
      <Card
        title={quote.title}
        description={quote.description}
        id={quote.id}
        key={quote.id}
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