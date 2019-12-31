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