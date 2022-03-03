//A class here 
//Review ideabox stuff
//Have input with the search bar
//onChange in here and set state
//can be a class and have state here similar with tracking each keyStroke
//submit search submit -> clicks and fires a function in app (a handle change in app and fires on event)

import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';


class Search extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <>
        <Link to='/'>
          <button className='home-btn'>Return Home</button>
        </Link>
      <div className='search-section'>
        <div className='search-bar'>
          <p className='search-title'>Search to see if your favorite author has a quote in this collection...</p>
       </div>
        <form>
          <input className='search-bar-input'
            type='text'
            placeholder='Search Author By Name'
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </form>
      </div>
      </>
    )
  }
}

export default Search;

