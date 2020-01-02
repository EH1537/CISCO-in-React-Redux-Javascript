import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import ConfigureInterface from '../components/ConfigureInterface.jsx';
import CreateDevice from '../components/CreateDevice.jsx';
import QuerryDevice from '../components/QuerryDevice.jsx';

const mapStateToProps = (state) => ({
  //toggles for rendering
  devTog: state.toggle.devTog,
  interTog: state.toggle.interTog,
  queryTog: state.toggle.queryTog,
  deviceQuerryTog: state.toggle.deviceQuerryTog,
  display: state.device.display,
  //interface
  interfaceName: state.interface.interfaceName,
  interfaceAddress: state.interface.interfaceAddress,
  interfaceDescription: state.interface.interfaceDescription,
  interfaceSubnet: state.interface.interfaceSubnet,
  displayInterface: state.interface.display,  
  //device querry
  querryString: state.device.querryString,
  RouterOrSwitch: state.device.RouterOrSwitch,
  nameString: state.device.nameString,
  secretString: state.device.secretString,
  conString: state.device.conString,
  auxString: state.device.auxString,
  //router only
  vtyString: state.device.vtyString,
  //switch only
  vlanNumString: state.device.vlanNumString,
  vlanIPString: state.device.vlanIPString,
  vlanSubString: state.device.vlanSubString,
  switchGateString: state.device.switchGateString,
  bannerInString: state.device.bannerInString,
});

const mapDispatchToProps = (dispatch) => ({
  findDeviceAsyncThunk: (name) => dispatch(actions.findDeviceAsyncThunk(name)),
  deleteDevice: (name) => dispatch(actions.deleteDevice(name)),

  createDeviceToggle: () => dispatch(actions.createDeviceToggle()),
  querryDeviceToggle: () => dispatch(actions.querryDeviceToggle()),
  configureInterfaceToggle: () => dispatch(actions.configureInterfaceToggle()),
  interfaceConfig: (e) => dispatch(actions.interfaceConfig(e.target.value, e.target.id)),
  createInterface: () => dispatch(actions.createInterface()),
  deviceConfig: (e) => dispatch(actions.deviceConfig(e.target.value, e.target.id)),
  routerOrSwitchToggle: () => dispatch(actions.routerOrSwitchToggle()),
  createDevice: () => dispatch(actions.createDevice()),
  generateConfig: () => dispatch(actions.generateConfig()),
  deviceQuerry: () => dispatch(actions.deviceQuerry()),
  // findDevice: (object) => dispatch(actions.findDevice(object)),
  fieldBlanker: () => dispatch(actions.fieldBlanker()),
});

class CISCOcontainer extends Component {


  render(props) {
    function devClick(){
      console.log('in dev click')
      this.props.fieldBlanker();
      this.props.createDeviceToggle();
    }

    function querryClick(){
      console.log('in querry click')
      this.props.fieldBlanker();
      this.props.querryDeviceToggle();      
    }
    return (
      <main>
        <div className="container">
          <div className="outerBox">
            <h1 id="header">Choose an Action</h1>
            <button id='createDev' type='button' onClick={()=> {this.props.fieldBlanker(),this.props.createDeviceToggle()}  }>Create Device</button>
            <button id='queryDev' type='button' onClick={()=> {this.props.fieldBlanker(),this.props.querryDeviceToggle()}  }>Device Lookup</button>
            <button id='configInter' type='button' onClick={() => this.props.configureInterfaceToggle()}>Configure Interface</button>


            {this.props.devTog === true &&
              <div><CreateDevice
                createDevice={this.props.createDevice}
                generateConfig={this.props.generateConfig}
                deviceConfig={this.props.deviceConfig}
                routerOrSwitchToggle={this.props.routerOrSwitchToggle}
                RouterOrSwitch={this.props.RouterOrSwitch}
                nameString={this.props.nameString}
                secretString={this.props.secretString}
                conString={this.props.conString}
                auxString={this.props.auxString}
                vtyString={this.props.vtyString}
                vlanNumString={this.props.vlanNumString}
                vlanIPString={this.props.vlanIPString}
                vlanSubString={this.props.vlanSubString}
                switchGateString={this.props.switchGateString}
                bannerInString={this.props.bannerInString}
                VLanCheck={this.props.VLanCheck}
                display={this.props.display}
                /></div>}

            {this.props.queryTog === true && 
            <div><QuerryDevice
              deviceQuerryTog={this.props.deviceQuerryTog}
              deviceQuerry={this.props.deviceQuerry}
              // findDevice={this.props.findDevice}
              querryString={this.props.querryString}
              deleteDevice={this.props.deleteDevice}

              findDeviceAsyncThunk={this.props.findDeviceAsyncThunk}

              //to be passed down to the subsequent configuration display
              createDevice={this.props.createDevice}
              generateConfig={this.props.generateConfig}
              deviceConfig={this.props.deviceConfig}
              routerOrSwitchToggle={this.props.routerOrSwitchToggle}
              RouterOrSwitch={this.props.RouterOrSwitch}
              nameString={this.props.nameString}
              secretString={this.props.secretString}
              conString={this.props.conString}
              auxString={this.props.auxString}
              vtyString={this.props.vtyString}
              vlanNumString={this.props.vlanNumString}
              vlanIPString={this.props.vlanIPString}
              vlanSubString={this.props.vlanSubString}
              switchGateString={this.props.switchGateString}
              bannerInString={this.props.bannerInString}
              VLanCheck={this.props.VLanCheck}
              display={this.props.display}
              /></div>}

            {this.props.interTog === true &&
              <div><ConfigureInterface
                interfaceConfig={this.props.interfaceConfig}
                interfaceAddress={this.props.interfaceAddress}
                interfaceDescription={this.props.interfaceDescription}
                interfaceSubnet={this.props.interfaceSubnet}
                interfaceName={this.props.interfaceName}
                createInterface={this.props.createInterface}
                display={this.props.displayInterface}
              /></div>}
          </div>
        </div>
        </main>
      )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(CISCOcontainer);
