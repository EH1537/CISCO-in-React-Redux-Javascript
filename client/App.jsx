import React, { Component } from 'react';

import CISCOContainer from './containers/CISCOcontainer.jsx';

import './styles.css';

class App extends Component {

  render() {
    return (
      <div id="app">
        <h1>CISCO Configuration</h1>
        <h2>....connected to Database</h2>
        <CISCOContainer />
      </div>
    )
  }
}

export default App;