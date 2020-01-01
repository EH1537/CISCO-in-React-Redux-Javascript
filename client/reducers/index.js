import { combineReducers } from 'redux';

import CISCODevicereducer from './CISCODeviceReducer.js';
import CISCOToggleReducers from './CISCOToggleReducers.js';
import CISCOInterfaceReducer from './CISCOInterfaceReducer.js';

const reducers = combineReducers({
  device: CISCODevicereducer,
  toggle: CISCOToggleReducers,
  interface: CISCOInterfaceReducer
})


export default reducers;