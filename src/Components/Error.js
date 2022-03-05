import React from 'react';
import '../CSS/Error.css';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='error-container'>
         <img className='error-img' src={require('../Assets/cursive.jpg')} alt='error msg'/>
         <p className='error-msg'>Oops, something is amiss! Please return home.</p>
    </div>
  )
};

export default Error;