import React from 'react';
import './Nav.css'


const Nav = () => {

  return (
  <nav className='nav'>
          <h1 className='title'>Welcome to Quotelandia</h1>
            <div className='nav-btns-container'>
              <button className='left-side-btn'>See Quotes</button>
              <button className='right-side-btn'>Search By Author</button>
            </div>
            <div className='about-msg'>
                <h2 className='greeting-msg'>a land for words...</h2>
            </div>
        </nav> 
  )
}


export default Nav;