import React from 'react';
import ConfigurationDisplay from '../components/ConfigurationDisplay.jsx';
const CreateDevice = (props) => {
  const handleCreateSubmit = (e) => {
      console.log('submitting create device')
      e.preventDefault();
      props.createDevice();
  }

  return (
    <div className="deviceCreator">
      <form onSubmit={handleCreateSubmit}>
        <input
          id="nameString"
          type="text"
          placeholder="Name of Device"
          onChange={props.deviceConfig}
          value={props.nameString}>
        </input>
        <input
          id="secretString"
          type="text"
          placeholder="Secret Password"
          onChange={props.deviceConfig}
          value={props.secretString}>
        </input>
        <input
          id="conString"
          type="text"
          placeholder="Console Password"
          onChange={props.deviceConfig}
          value={props.conString}>
        </input>
        <input
          id="vtyString"
          type="text"
          placeholder="VTY Password"
          onChange={props.deviceConfig}
          value={props.vtyString}>
        </input>
        <input
          id="bannerInString"
          type="text"
          placeholder="Banner Text (leave blank for default)"
          onChange={props.deviceConfig}
          value={props.bannerInString}>
        </input>
        <br></br>
        <button id='RouterOrSwitch' type='button' onClick={() => props.routerOrSwitchToggle()}>Router?</button>
        <br></br>
        {props.RouterOrSwitch === false &&
          <div>
            <input
              id='vlanNumString'
              type="text"
              placeholder="VLan Number"
              onChange={props.deviceConfig}
              value={props.vlanNumString}>
            </input>
            <input
              id="vlanIPString"
              type="text"
              placeholder="VLan IP Address"
              onChange={props.deviceConfig}
              value={props.vlanIPString}>
            </input>
            <input
              id="vlanSubString"
              type="text"
              placeholder="VLan Subnet Mask"
              onChange={props.deviceConfig}
              value={props.vlanSubString}>
            </input>
            <input
              id="switchGateString"
              type="text"
              placeholder="Default Gateway for Switch"
              onChange={props.deviceConfig}
              value={props.switchGateString}>
            </input>
          </div>
        }
        {props.RouterOrSwitch === true && <div>
          <input
          id="auxString"
          type="text"
          placeholder="Aux Password for Router"
          onChange={props.deviceConfig}
          value={props.auxString}>
          </input>
        </div>}
        <br></br>
        <button id='GenerateConfig' type='button' onClick={() => props.generateConfig()}>Generate Config</button>
        <br></br>
        <input id='addDevice' type="submit" value="Add Device"></input>
      </form>
      <ConfigurationDisplay display={(props.display)} />
    </div>
  )
}

export default CreateDevice;