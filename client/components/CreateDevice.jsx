import React from 'react';
import ConfigurationDisplay from '../components/ConfigurationDisplay.jsx';
const CreateDevice = (props) => {
  const handleCreateSubmit = (e) => {
      console.log('submitting create device')
      e.preventDefault();
      props.createDevice();
  }
//create device has a very large number of fields that are all updating the state when they change, each field (or input)
//had an id and a value, when they are chagned, it invokes the deviceConfig action, feeding the value 
  return (
    <div className="deviceCreator">
      <form onSubmit={handleCreateSubmit}><br></br>
        <div className = "inputComponent">
        <label htmlFor="nameString">Name of Device</label><br></br>
          <input
          id="nameString"
          type="text"
          placeholder="Needs to be unique"
          onChange={props.deviceConfig}
          value={props.nameString}>
        </input>
        </div>
        <div className = "inputComponent">
        <label htmlFor="secretString">Secret Password</label><br></br>
        <input
          id="secretString"
          type="text"
          placeholder="For executive privilege"
          onChange={props.deviceConfig}
          value={props.secretString}>
        </input>
        </div>
        <div className = "inputComponent">
        <label htmlFor="conString">Console Password</label><br></br>
        <input
          id="conString"
          type="text"
          placeholder="For console access"
          onChange={props.deviceConfig}
          value={props.conString}>
        </input>
        </div>
        <div className = "inputComponent">
        <label htmlFor="vtyString">VTY Password</label><br></br>
        <input
          id="vtyString"
          type="text"
          placeholder="For remote access"
          onChange={props.deviceConfig}
          value={props.vtyString}>
        </input>
        </div>
        <div className = "inputComponent">
        <label htmlFor="bannerInString">Banner MOTD</label><br></br>
        <input
          id="bannerInString"
          type="text"
          placeholder="Leave blank for canned"
          onChange={props.deviceConfig}
          value={props.bannerInString}>
        </input>
        </div>
        <div className="break"></div> 
        <div>
        <button id='RouterOrSwitch' type='button' onClick={() => props.routerOrSwitchToggle()}>Router?</button>
        </div>
        <div className="break"></div> 
        {props.RouterOrSwitch === false &&
          <div className="RorS" >
          <div>
          <label htmlFor="vlanNumString">VLAN Number</label><br></br>
            <input
              id='vlanNumString'
              type="text"
              placeholder="1 for remote access"
              onChange={props.deviceConfig}
              value={props.vlanNumString}>
            </input>
          </div>
          <div>
          <label htmlFor="vlanIPString">VLAN IP Address</label><br></br>
            <input
              id="vlanIPString"
              type="text"
              placeholder="Switches Address"
              onChange={props.deviceConfig}
              value={props.vlanIPString}>
            </input>
          </div>
          <div>
          <label htmlFor="vlanSubString">VLAN Subnet Mask</label><br></br>
            <input
              id="vlanSubString"
              type="text"
              placeholder="Use 255.255.255.0 format"
              onChange={props.deviceConfig}
              value={props.vlanSubString}>
            </input>
          </div>
          <div>
          <label htmlFor="switchGateString">VLAN Gateway</label><br></br>
            <input
              id="switchGateString"
              type="text"
              placeholder="The address of router"
              onChange={props.deviceConfig}
              value={props.switchGateString}>
            </input>
          </div>
          </div>
        }
        {props.RouterOrSwitch === true && <div>
          <div className = "inputComponent">
          <label htmlFor="auxString">Aux Password for Router</label><br></br>
          <input
          id="auxString"
          type="text"
          placeholder="For auxiliary access"
          onChange={props.deviceConfig}
          value={props.auxString}>
          </input>
          </div>
        </div>}
        <div className="break"></div> 
        <button className='GenerateConfig' type='button' onClick={() => props.generateConfig()}>Generate Config</button>
        <div className="break"></div> 
        <input id='addDevice' type="submit" value="Add Device"></input>
      </form>
      <ConfigurationDisplay display={(props.display)} />
    </div>
  )
}

export default CreateDevice;