import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import ConfigureInterface from '../components/ConfigureInterface.jsx';
import CreateDevice from '../components/CreateDevice.jsx';
import QuerryDevice from '../components/QuerryDevice.jsx';

const mapStateToProps = (state) => ({
  //toggles for rendering
  devTog: state.cisco.devTog,
  interTog: state.cisco.interTog,
  queryTog: state.cisco.queryTog,
  deviceQuerryTog: state.cisco.deviceQuerryTog,
  display: state.cisco.display,
  //interface
  interfaceName: state.cisco.interfaceName,
  interfaceAddress: state.cisco.interfaceAddress,
  interfaceDescription: state.cisco.interfaceDescription,
  interfaceSubnet: state.cisco.interfaceSubnet,
  //device querry
  RouterOrSwitch: state.cisco.RouterOrSwitch,
  nameString: state.cisco.nameString,
  secretString: state.cisco.secretString,
  conString: state.cisco.conString,
  auxString: state.cisco.auxString,
  //router only
  vtyString: state.cisco.vtyString,
  //switch only
  vlanNumString: state.cisco.vlanNumString,
  vlanIPString: state.cisco.vlanIPString,
  vlanSubString: state.cisco.vlanSubString,
  switchGateString: state.cisco.switchGateString,
  bannerInString: state.cisco.bannerInString,
});

const mapDispatchToProps = (dispatch) => ({
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
});

class CISCOcontainer extends Component {


  render(props) {
    return (
      <main>
        <div className="container">
          <div className="outerBox">
            <h1 id="header">Choose an Action</h1>
            <button id='createDev' type='button' onClick={() => this.props.createDeviceToggle()}>Create Device</button>
            <button id='queryDev' type='button' onClick={() => this.props.querryDeviceToggle()}>Device Lookup</button>
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
                display={this.props.display}
              /></div>}
          </div>
        </div>
      </main>
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(CISCOcontainer);
