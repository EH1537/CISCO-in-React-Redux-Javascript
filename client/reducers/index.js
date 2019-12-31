import { combineReducers } from 'redux';

import CISCOreducer from './CISCOreducer.js';

const reducers = combineReducers({
  cisco: CISCOreducer
})


export default reducers;