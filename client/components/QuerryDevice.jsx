import React from 'react';
import CreateDevice from '../components/CreateDevice.jsx';
const QuerryDevice = (props) => {
  const handleSubmit = (e) => {
    console.log('submitting querry device')
    e.preventDefault();
    console.log('executing devce querry')
    props.deviceQuerry();
    fetch(`/api/?id=${props.nameString}`)
    .then(response => response.json())
    .then(deviceFound => {
      console.log("device found",deviceFound)
      props.findDevice(deviceFound);
    });

  }

  return (
    <div id="querryID">
      <form onSubmit={handleSubmit}>
        <input
          id="nameString"
          type="text"
          placeholder="Device Name"
          onChange={props.deviceConfig}
          value={props.nameString}>
        </input>
        <input type="submit" value="Querry a Device"></input>
      </form>
      {props.deviceQuerryTog === true &&
      <div>
        <CreateDevice
          createDevice={props.createDevice}
          generateConfig={props.generateConfig}
          deviceConfig={props.deviceConfig}
          routerOrSwitchToggle={props.routerOrSwitchToggle}
          RouterOrSwitch={props.RouterOrSwitch}
          nameString={props.nameString}
          secretString={props.secretString}
          conString={props.conString}
          auxString={props.auxString}
          vtyString={props.vtyString}
          vlanNumString={props.vlanNumString}
          vlanIPString={props.vlanIPString}
          vlanSubString={props.vlanSubString}
          switchGateString={props.switchGateString}
          bannerInString={props.bannerInString}
          VLanCheck={props.VLanCheck}
          display={props.display}
          />
        </div>}
    </div>
  )
}

export default QuerryDevice;