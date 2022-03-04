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
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      results: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

//Currently working if typed in exactly as 
//Possible try a .contains
//RegExer???: built in function to import that lets user set rules to disregard case (need to research this)
//Next steps: Need to render the cards!

  handleSubmit = (event) => {
    event.preventDefault()
    const filteredQuotes = this.props.quotes.filter((quote) => {
      return quote.author === this.state.searchTerm
    })
    console.log('filtered:', filteredQuotes)
    // this.clearInputs()
  }

//CLEARINPUTS FN not currently working correctly?
  // clearInputs = () => {
  //   this.setState({
  //     searchTerm: '',
  //     results: ''
  //   })
  // }

  render() {
    return (
      <>
        <Link to='/'>
          <button className='home-btn'>Return Home</button>
        </Link>
      <div className='search-section'>
        <div className='search-bar'>
          <p className='search-title'>Search below to see if your favorite author is in Quotelandia...
          </p>
       </div>
        <form>
          <input className='search-bar-input'
            type='text'
            placeholder='Search Author By Name'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default Search;

