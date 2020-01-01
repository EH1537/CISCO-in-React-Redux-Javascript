import * as types from '../constants/actionTypes';

export const interfaceConfig = (str, id) => ({
  type: types.INTERFACE_CONFIG,
  payload: {string: str, id: id}
});

export const deviceConfig = (str, id) => ({
  type: types.DEVICE_CONFIG,
  payload: {string: str, id: id}
});

export const createInterface = () => ({
  type: types.CREATE_INTERFACE,
  payload: ''
});

export const createDeviceToggle = () => ({
  type: types.CREATE_DEVICE_TOGGLE,
  payload: ''
});

export const querryDeviceToggle = () => ({
  type: types.QUERRY_DEVICE_TOGGLE,
  payload: ''
})

export const configureInterfaceToggle = () => ({
  type: types.CONFIGURE_INTERFACE_TOGGLE,
  payload: ''
});

export const routerOrSwitchToggle = () => ({
  type: types.ROUTER_OR_SWITCH_TOGGLE,
  payload: ''
});

export const createDevice = () => ({
  type: types.CREATE_DEVICE,
  payload: ''
});

export const generateConfig = () => ({
  type: types.GENERATE_CONFIG,
  payload: ''
});

export const deviceQuerry = () => ({
  type: types.DEVICE_QUERRY,
  payload: ''
});

export const findDevice = (deviceObj) => ({
  type: types.FIND_DEVICE,
  payload: deviceObj
});

export const fieldBlanker = () => ({
  type: types.FIELD_BLANKER,
  payload: ''
});

// export function deviceHasErroes(bool) {
//   return {
//       type: 'DEVICE_HAS_ERRORED',
//       hasErrored: bool
//   };
// }
// export function itemsIsLoading(bool) {
//   return {
//       type: 'DEVICE_IS_LOADING',
//       isLoading: bool
//   };
// }
// export function itemsFetchDataSuccess(items) {
//   return {
//       type: 'DEVICE_FETCH_DATA_SUCCESS',
//       items
//   };
// }