import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';
// import Error from './Error.js'
import Nav from './Nav.js';
import { Routes, Route } from 'react-router-dom';
import Search from './Search.js';
import Home from './Home.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      // error: ''
    }
  }

componentDidMount = () => {
  fetchQuotes()
  .then(data => this.setState({quotes: data}))
// .catch(error => this.setState({error: error}))
}
 
render() {
  return(
    <main className='App'>
        <Nav />
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/>
          <Route path='/search' element={<Search quotes={this.state.quotes} />}/>
        </Routes>
    </main>
  )
}
}

export default App;

