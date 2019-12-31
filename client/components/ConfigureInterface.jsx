import React from 'react';
import * as input from '../constants/input.js';
import ConfigurationDisplay from '../components/ConfigurationDisplay.jsx';

const ConfigureInterface = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createInterface();
  }
  return (
    <div className="configInterface">
      <form onSubmit={handleSubmit}>
        <input
          id = "IPname"
          type="text"
          placeholder="Name of Interface"
          onChange={props.interfaceConfig}
          value={props.interfaceName}>
        </input>
        <input
          id = "description"
          type="text"
          placeholder="task description"
          onChange={props.interfaceConfig}
          value={props.interfaceDescription}>
        </input>
        <input
          id = "address"
          type="text"
          placeholder="ip address"
          onChange={props.interfaceConfig}
          value={props.interfaceAddress}>
        </input>
        <input
          id = "subnet"
          type="text"
          placeholder="subnet mask"
          onChange={props.interfaceConfig}
          value={props.interfaceSubnet}>
        </input>
        <br></br>
        <input type="submit" value="Generate Config"></input>
      </form>
      <ConfigurationDisplay display={(props.display)}/>
    </div>
  )
}

export default ConfigureInterface;
