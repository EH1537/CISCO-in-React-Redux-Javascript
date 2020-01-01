import * as types from '../constants/actionTypes';
import * as CISCO_IO from '../constants/input.js';
const initialState = {
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
  display: '',
}

const CISCODeviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIELD_BLANKER: {
      return {
        ...state,
        RouterOrSwitch: false,
        nameString: '',
        secretString: '',
        conString: '',
        auxString: '',
        bannerInString: '',
        //router only
        vtyString: '',
        //switch only
        vlanNumString: '',
        vlanIPString: '',
        vlanSubString: '',
        switchGateString: '',
        display: '',
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
      switch (action.payload.id) {
        case "nameString": {
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

    case types.FIND_DEVICE: {
      console.log('in find device');

      return {
        ...state,
        RouterOrSwitch: action.payload.RouterOrSwitch,
        nameString: action.payload.nameString,
        secretString: action.payload.secretString,
        conString: action.payload.conString,
        auxString: action.payload.auxString,
        vtyString: action.payload.vtyString,
        vlanNumString: action.payload.vlanNumString,
        vlanIPString: action.payload.vlanIPString,
        vlanSubString: action.payload.vlanSubString,
        switchGateString: action.payload.switchGateString,
        bannerInString: action.payload.bannerInString,
      }
    }

    case types.CREATE_DEVICE: {
      console.log('in create device');
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
    default:
      return state;
  }
}

export default CISCODeviceReducer;