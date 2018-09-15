import React, { Component } from 'react'
import Hero from './Hero.js'
import Navbar from './navbar.js'
import Map from './map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Map />
      </div>
    );
  }
}

export default App;
