import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {

  return (
      <nav className='nav'>
            <h1 className='title'>Welcome to Quotelandia</h1>
            <div className='nav-btns-container'>
            <Link to='/quotes'>
              <button className='left-side-btn'>View Quote Collection</button>
            </Link>
            <div className='about-msg'>
                <h2 className='greeting-msg'>a land for words...</h2>
            </div>
            <Link to='/search'>
              <button className='right-side-btn'>Search Quotes By Author</button>
            </Link>
            </div>
        </nav> 
  )
}


export default Nav;