import * as types from '../constants/actionTypes';
import * as CISCO_IO from '../constants/input.js';
const initialState = {
  deviceQuerryTog: false,
  RouterOrSwitch: false,
  nameString: '',
  secretString: '',
  conString: '',
  auxString: '',
  vtyString: '',
  vlanNumString: '',
  vlanIPString: '',
  vlanSubString: '',
  switchGateString: '',
  bannerInString: '',
  devTog: false,
  queryTog: false,
  interTog: false,
  interfaceName: '',
  interfaceAddress: '',
  interfaceDescription: '',
  interfaceSubnet: '',
  display: '',
}

const CISCOReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.CREATE_DEVICE_TOGGLE: {
      let { devTog, queryTog, interTog } = state;
      devTog = !devTog;
      queryTog = false;
      interTog = false;
      return {
        ...state,
        devTog,
        queryTog,
        interTog
      }
    }

    case types.QUERRY_DEVICE_TOGGLE: {
      let { devTog, queryTog, interTog } = state;
      devTog = false;
      queryTog = !queryTog;
      interTog = false;

      return {
        ...state,
        devTog,
        queryTog,
        interTog
      }
    }

    case types.CONFIGURE_INTERFACE_TOGGLE: {
      let { devTog, queryTog, interTog } = state;
      devTog = false;
      queryTog = false;
      interTog = !interTog;

      return {
        ...state,
        devTog,
        queryTog,
        interTog
      }
    }
    
    case types.DEVICE_QUERRY: {
      let { deviceQuerryTog } = state;
      deviceQuerryTog = !deviceQuerryTog;

      return {
        ...state,
        deviceQuerryTog,
      }
    }
    case types.ROUTER_OR_SWITCH_TOGGLE: {
      let { RouterOrSwitch } = state;
      RouterOrSwitch = !RouterOrSwitch;

      return {
        ...state,
        RouterOrSwitch
      }
    }

    case types.DEVICE_CONFIG: {
      console.log('in device config');
      switch (action.payload.id) {
        case "nameString": {
          console.log('in name string');
          return {
            ...state,
            nameString: action.payload.string
          }
        }
        case "secretString": {
          return {
            ...state,
            secretString: action.payload.string
          }
        }
        case "conString": {
          return {
            ...state,
            conString: action.payload.string
          }
        }
        case "auxString": {
          return {
            ...state,
            auxString: action.payload.string
          }
        }
        case "vtyString": {
          return {
            ...state,
            vtyString: action.payload.string
          }
        }
        case "bannerInString": {
          return {
            ...state,
            bannerInString: action.payload.string
          }
        }
        case "vlanNumString": {
          return {
            ...state,
            vlanNumString: action.payload.string
          }
        }
        case "vlanIPString": {
          return {
            ...state,
            vlanIPString: action.payload.string
          }
        }
        case "vlanSubString": {
          return {
            ...state,
            vlanSubString: action.payload.string
          }
        }
        case "switchGateString": {
          return {
            ...state,
            switchGateString: action.payload.string
          }
        }
      }
    }
    case types.GENERATE_CONFIG: {
      let stateCopy = Object.assign({}, state);
      let prototypeInterface = {
        RouterOrSwitch: stateCopy.RouterOrSwitch,
        nameString: stateCopy.nameString,
        secretString: stateCopy.secretString,
        conString: stateCopy.conString,
        auxString: stateCopy.auxString,
        bannerInString: stateCopy.bannerInString,
        //router only
        vtyString: stateCopy.vtyString,
        //switch only
        vlanNumString: stateCopy.vlanNumString,
        vlanIPString: stateCopy.vlanIPString,
        vlanSubString: stateCopy.vlanSubString,
        switchGateString: stateCopy.switchGateString,
      }
      let display = CISCO_IO.CLIStringBuilder(prototypeInterface);
      // CISCO_IO.ipAddressChecker(prototypeInterface.interIpString, prototypeInterface.interSubString);
      return {
        ...state,
        display: display,
      }
    }
    case types.CREATE_DEVICE: {
      let stateCopy = Object.assign({}, state);
      let deviceName = stateCopy.nameString;
      let prototypeInterface = {
        RouterOrSwitch: stateCopy.RouterOrSwitch,
        nameString: stateCopy.nameString,
        secretString: stateCopy.secretString,
        conString: stateCopy.conString,
        auxString: stateCopy.auxString,
        bannerInString: stateCopy.bannerInString,
        //router only
        vtyString: stateCopy.vtyString,
        //switch only
        vlanNumString: stateCopy.vlanNumString,
        vlanIPString: stateCopy.vlanIPString,
        vlanSubString: stateCopy.vlanSubString,
        switchGateString: stateCopy.switchGateString,
      }

      let sendObj = {};
      sendObj[deviceName] = prototypeInterface;

      fetch("/api/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(sendObj),
      })
      let display = CISCO_IO.CLIStringBuilder(prototypeInterface);
      // CISCO_IO.ipAddressChecker(prototypeInterface.interIpString, prototypeInterface.interSubString);
      return {
        ...state,
        RouterOrSwitch: false,
        nameString: '',
        secretString: '',
        conString: '',
        auxString: '',
        //router only
        vtyString: '',
        //switch only
        vlanNumString: '',
        vlanIPString: '',
        vlanSubString: '',
        switchGateString: '',
        bannerInString: '',
        display: display,
      }
    }
    case types.INTERFACE_CONFIG: {
      switch (action.payload.id) {
        case "IPname": {
          return {
            ...state,
            interfaceName: action.payload.string
          }
        }
        case "address": {
          return {
            ...state,
            interfaceAddress: action.payload.string
          }
        }
        case "description": {
          return {
            ...state,
            interfaceDescription: action.payload.string
          }
        }
        case "subnet": {
          return {
            ...state,
            interfaceSubnet: action.payload.string
          }
        }
      }
    }

    case types.CREATE_INTERFACE: {
      let stateCopy = Object.assign({}, state);
      let prototypeInterface = {
        interNameString: stateCopy.interfaceName,
        interIpString: stateCopy.interfaceAddress,
        interSubString: stateCopy.interfaceSubnet,
        interDescString: stateCopy.interfaceDescription,
      }
      let display = CISCO_IO.CLIInterfaceBuilder(prototypeInterface);
      CISCO_IO.ipAddressChecker(prototypeInterface.interIpString, prototypeInterface.interSubString);
      return {
        ...state,
        interfaceName: '',
        interfaceAddress: '',
        interfaceDescription: '',
        interfaceSubnet: '',
        display: display,
      }
    }
    default:
      return state;
  }
}

export default CISCOReducer;