//A class here 
//Review ideabox stuff
//Have input with the search bar
//onChange in here and set state
//can be a class and have state here similar with tracking each keyStroke
//submit search submit -> clicks and fires a function in app (a handle change in app and fires on event)

import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='search-section'>
        <h3 className='search-title'>Search Bar</h3>
      </div>
    )
  }
}

export default Search;

