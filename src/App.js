import React, { Component } from 'react';
import Hero from './Hero.js'
import Navbar from './navbar.js';
import './favicon.ico?1536988234406'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
