import React from 'react';
import '../CSS/Home.css';


const Home = () => {

  return (
    <>
      <div className='welcome-msg'>
          <h4 className='title-app'>Quotelandia</h4>
            <h5 className='greeting'>~Welcome to this magical land of all things quotes~</h5>
          <p className='new-msg'>If you're new, here's what you can do:</p>
          <p className='all-msg'>takea peek at our entire quote collection...</p>
          <p>or</p>
          <p className='search-msg'>search the collection to see if your favorite author lives in Quotelandia...</p>
      </div> 
    </>
  )
};

export default Home;


