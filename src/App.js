import React, { Component } from 'react';
import Hero from './Hero.js'
import Navbar from './navbar.js';

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
