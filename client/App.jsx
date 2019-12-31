import React, { Component } from 'react';

import CISCOContainer from './containers/CISCOcontainer.jsx';

import './styles.css';

class App extends Component {

  render() {
    return (
      <div id="app">
        <h1>CISCO Configuration built with React, Redux (ouch) and Mongo</h1>
        <CISCOContainer />
      </div>
    )
  }
}

export default App;