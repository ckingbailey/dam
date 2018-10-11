import React, { Component } from 'react'
import AboutModal from './aboutModal.js'
import Definitions from './definitions.js'
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
      <div className={ `App${ this.state.showAboutModal ? " modal-open" : "" }`}>
        { this.state.showAboutModal ? <div onClick={ this.closeAboutModal } className="about-modal__onclickoutside"></div> : null }
        { this.state.showAboutModal ? <AboutModal handleCloseClick={ () => this.closeAboutModal() } /> : null }
        <Navbar handleAboutClick={ () => this.toggleAboutModal() } />
        <Hero />
        <Story />
        <Map />
        <Definitions />
      </div>
    );
  }
}

export default App;
