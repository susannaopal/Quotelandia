import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';
// import Error from './Error.js'
import Nav from './Nav.js'
import { Routes, Route } from 'react-router-dom'


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
          <Route path='/'/>
          <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/>
          <Route path='/search'/>
        </Routes>
    </main>
  )
}
}

export default App;

             {/* <Quotes quotes={this.state.quotes} />    */}

