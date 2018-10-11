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

  damReportLink = "https://water.ca.gov/-/media/DWR-Website/Web-Pages/Programs/All-Programs/Division-of-safety-of-dams/Files/Publications/Dams-Within-Jurisdiction-of-the-State-of-California-2018-Alphabetically-by-Dam-Name.pdf"

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
        { this.state.showAboutModal ? <AboutModal handleCloseClick={ () => this.closeAboutModal() } damReportLink={ this.damReportLink }/> : null }
        <Navbar handleAboutClick={ () => this.toggleAboutModal() } />
        <Hero />
        <Story />
        <Map />
        <Definitions damReportLink={ this.damReportLink }/>
      </div>
    );
  }
}

export default App;
