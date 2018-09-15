import React, { Component } from 'react';
import Hero from './Hero.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dam Safety</h1>
        </header>
        <Hero />
      </div>
    );
  }
}

export default App;
