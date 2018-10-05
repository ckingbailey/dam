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

  maybeShowAboutModal = () => {
    return this.state.showAboutModel ?
      <AboutModal /> : null
  }

  toggleAboutModal = () => {
    this.setState(prev => {
      return { showAboutModal: !prev.showAboutModal }
    })
  }

  closeAboutModal = () => {
    this.setState({ showAboutModal: false })
  }

  render() {
    return (
      <div className="App">
        { this.state.showAboutModal ? <AboutModal handleCloseClick={ () => this.closeAboutModal() } /> : null }
        <Navbar handleAboutClick={ () => this.toggleAboutModal() } />
        <Hero />
        <Story />
        <Map />
      </div>
    );
  }
}

export default App;
