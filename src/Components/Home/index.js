import './home.css'
import pages from '../Navigation/navigation_pages.json'

import React from 'react';
import Background from '../Background';
import Navigation from '../Navigation';

const Home = () => {
  document.title = 'Paul Plew';
  
  return (
    <>
      <Background />
      <div className="center">
        <Navigation selected={pages.home}/>
      </div>
    </>
  );
}

export default Home;