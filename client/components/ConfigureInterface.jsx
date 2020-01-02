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
      <div className = "inputComponent">
        <label for="IPname">Name of Interface</label><br></br>
        <input
          id = "IPname"
          type="text"
          placeholder="ex: fa0/1 or g0/0"
          onChange={props.interfaceConfig}
          value={props.interfaceName}>
        </input>
        </div>
        <div className = "inputComponent">
        <label for="description">Interface desciption</label><br></br>
        <input
          id = "description"
          type="text"
          placeholder="where it goes"
          onChange={props.interfaceConfig}
          value={props.interfaceDescription}>
        </input>
        </div>
        <div className = "inputComponent">
        <label for="address">IP Address</label><br></br>
        <input
          id = "address"
          type="text"
          placeholder="Address at interface"
          onChange={props.interfaceConfig}
          value={props.interfaceAddress}>
        </input>
        </div>
        <div className = "inputComponent">
        <label for="address">IP Address</label><br></br>
        <input
          id = "subnet"
          type="text"
          placeholder="Use 255.255.255.255 format"
          onChange={props.interfaceConfig}
          value={props.interfaceSubnet}>
        </input>
        </div>
        <div class="break"></div> 
        <input class= "GenerateConfig" type= "submit" value="Generate Config"></input>
      </form>
      <ConfigurationDisplay display={(props.display)}/>
    </div>
  )
}

export default ConfigureInterface;
