import React from 'react';
import '../CSS/Error.css';


const Error = () => {
  return (
    <div className='error-container'>
        <p className='error-msg'>Oops, something is amiss!</p>
              {/* <img className='error-img' src={require('../Assets/cursive.png')} alt='error msg'/> */}
    </div>
  )
};

export default Error;