import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {

  return (
  <nav className='nav'>
          <Link to='/'>
            <h1 className='title'>Welcome to Quotelandia</h1>
          </Link>
            <div className='nav-btns-container'>
            <Link to='/quotes'>
              <button className='left-side-btn'>See Quotes</button>
            </Link>
            <Link to='/search'>
              <button className='right-side-btn'>Search By Author</button>
            </Link>
            </div>
            <div className='about-msg'>
                <h2 className='greeting-msg'>a land for words...</h2>
            </div>
        </nav> 
  )
}


export default Nav;