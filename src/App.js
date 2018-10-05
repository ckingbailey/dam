import React, { Component } from 'react'
import AboutModal from './aboutModal.js'
import Hero from './Hero.js'
import Navbar from './navbar.js'
import Map from './map.js'
import Story from './story.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAboutModal: false
    }
  }

  maybeShowAboutModal() {
    return this.state.showAboutModel ?
      <AboutModal /> : null
  }

  toggleAboutModal() {
    this.setState(prev => {
      return { showAboutModal: !prev.showAboutModal }
    })
  }

  render() {
    return (
      <div className="App">
        { this.maybeShowAboutModal() }
        <Navbar />
        <Hero />
        <Story />
        <Map />
      </div>
    );
  }
}

export default App;
