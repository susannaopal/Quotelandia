import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';
// import Error from './Error.js'
import Nav from './Nav.js'


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
             {/* <Quotes quotes={this.state.quotes} />    */}
    </main>
  )
}
}


export default App;

