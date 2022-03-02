import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import { fetchQuotes, GetQuotes } from './apiCall.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [
    // {
  //   "id": 1,
  //   "title": "Genius is one percent inspiration and ninety-nine percent perspiration.",
  //   "description": "Thomas Edison"
  // },
  // {
  //   "id": 2,
  //   "title": "You can observe a lot just by watching.",
  //   "description": "Yogi Berra"
  // },
  // {
  //   "id": 3,
  //   "title": "A house divided against itself cannot stand.",
  //   "description": "Abraham Lincoln"
  // }
  ]
    }
  }

componentDidMount = () => {
  fetchQuotes()
  .then(data=>console.log("is this working?", data))
  // .then(data => this.setState({quotes: data}))
  GetQuotes()
  .then(data=>console.log("are you also working?", data))


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