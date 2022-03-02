import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import { fetchQuotes } from './apiCall.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

componentDidMount = () => {
  fetchQuotes()
  .then(data => this.setState({quotes: data}))
}
 
render() {
  return(
    <main className='App'>
      <h1>Welcome to Quotelandia!</h1>
      <Quotes quotes={this.state.quotes} />
    </main>
  )
}
}


export default App;