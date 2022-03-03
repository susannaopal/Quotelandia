import React from 'react';
import CardDetails from './CardDetails'

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

//BEFORE WHEN APP HAD STATE
// const Card = ({ text, author, id }) => {
//   return (
//     <div className='card'>
//       <h3>{text}</h3>
//       <p>{author}</p>
//     </div>
//   )
// }

// export default Card;

