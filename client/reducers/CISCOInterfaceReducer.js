import * as types from '../constants/actionTypes';
import * as CISCO_IO from '../constants/input.js';

const initialState = {
  interfaceName: '',
  interfaceAddress: '',
  interfaceDescription: '',
  interfaceSubnet: '',
  display: '',
}

const CISCOInterfaceReducer = (state = initialState, action) => {
  switch (action.type) {
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


export default CISCOInterfaceReducer;