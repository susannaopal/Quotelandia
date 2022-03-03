import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';
// import Error from './Error.js'
import Nav from './Nav.js';
import { Routes, Route } from 'react-router-dom';
import Search from './Search.js'

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
        <div className='welcome-msg'>
          <h1>Quotelandia: some sort of quippy message about this magical place!</h1>
          </div>
        <Routes> 
          <Route path='/'/>
          <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
    </main>
  )
}
}

export default App;

             {/* <Quotes quotes={this.state.quotes} />    */}