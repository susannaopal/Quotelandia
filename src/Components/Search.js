import React, { Component } from 'react';
import '../CSS/Search.css';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      filteredQuotes: [],
      emptySubmitError: 'Please add a name to search before submitting.',
      searchError: 'Sorry, we don\'t have that author in the collection.',
      hasSearched: false
    };
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
    this.setState({hasSearched: false})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({hasSearched: true})
    if (this.state.searchTerm === '') {
      return 
    }
     const filteredQuotes = this.props.quotes.filter((quote) => {
      if(quote.author) {
        return quote.author.toLowerCase() === this.state.searchTerm.toLowerCase()
    }
  });
      this.setState({ filteredQuotes: filteredQuotes })
  }

  render() {
    const filteredQuoteCards = this.state.filteredQuotes.map((quote, index) => {
      return (
        <Card
          text={quote.text}
          author={quote.author}
          id={index}
          key={index}
       />
    )
  });
  
    return (
      <>
        <Link to='/'>
          <button className='home-btn'>Return Home</button>
        </Link>
      <div className='search-section'>
        <div className='search-bar'>
          <p className='search-title'>Search below to see if your favorite author lives in Quotelandia...
          </p>
       </div>
        <form>
          <input className='search-bar-input'
            type='text'
            placeholder='Search Author Name'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
      </div>
          {this.state.hasSearched && this.state.searchTerm === '' && this.state.emptySubmitError}
          {this.state.hasSearched && this.state.searchTerm !== '' && this.state.filteredQuotes.length === 0 && this.state.searchError}
          {this.state.hasSearched && this.state.filteredQuotes.length > 0 && filteredQuoteCards}
      </>
    )
  }
};

export default Search;

Search.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object)
};