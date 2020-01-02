import * as types from '../constants/actionTypes';

const initialState = {
  deviceQuerryTog: false,
  devTog: false,
  queryTog: false,
  interTog: false,
}

const CISCOToggleReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_DEVICE_TOGGLE: {
      let { devTog, queryTog, interTog, deviceQuerryTog } = state;
      devTog = !devTog;
      queryTog = false;
      interTog = false;
      deviceQuerryTog = false;
      return {
        ...state,
        devTog,
        queryTog,
        interTog,
        deviceQuerryTog
      }
    }

    case types.QUERRY_DEVICE_TOGGLE: {
      let { devTog, queryTog, interTog, deviceQuerryTog } = state;
      devTog = false;
      queryTog = !queryTog;
      deviceQuerryTog = false;
      interTog = false;

      return {
        ...state,
        devTog,
        queryTog,
        interTog,
        deviceQuerryTog
      }
    }

    case types.CONFIGURE_INTERFACE_TOGGLE: {
      let { devTog, queryTog, interTog, deviceQuerryTog } = state;
      devTog = false;
      queryTog = false;
      interTog = !interTog;
      deviceQuerryTog = false;

      return {
        ...state,
        devTog,
        queryTog,
        interTog,
        deviceQuerryTog
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
    default:
      return state;  
  }
}

export default CISCOToggleReducers;