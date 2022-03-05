import React from 'react';
import '../CSS/Error.css';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='error-container'>
         <img className='error-img' src={require('../Assets/cursive.jpg')} alt='error msg'/>
         <p className='error-msg'>Oops, something is amiss!</p>
        <Link to='/'>
          <button className='go-home'>Return Home</button>
        </Link>
    </div>
  )
};

export default Error;