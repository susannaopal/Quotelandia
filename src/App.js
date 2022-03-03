import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';
// import Error from './Error.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      error: ''
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
        <nav className='nav'>
          <h1 className='title'>Welcome to Quotelandia</h1>
            <div className='nav-btns-container'>
              <button className='left-side-btn'>See Quotes</button>
              <button className='right-side-btn'>Search By Author</button>
            </div>
            <div className='about-msg'>
                <h2 className='greeting-msg'>a land for words...</h2>
            </div>
        </nav> 
              <img src="https://img.theculturetrip.com/wp-content/uploads/2017/10/old-books-436498_1280.jpg" alt='book-imagery-background' className='background-img' position='fixed'/>
             {/* <Quotes quotes={this.state.quotes} />    */}
    </main>
  )
}
}


export default App;

