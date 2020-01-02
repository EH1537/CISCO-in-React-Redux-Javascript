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

export const deleteDevice = name => ({
  type: types.DELETE_DEVICE,
  payload: name
});

export const findDeviceAsyncThunk = (name) => {
  console.log('inside findDeviceThunk')
  console.log('searching with', name);
  return dispatch => {
    dispatch(findThunkDeviceStarted());



    fetch(`/api/?id=${name}`)
    .then(response => response.json())
    .then(deviceFound => {
      // setTimeout(() => {
      //   console.log("device found",deviceFound)
      //   dispatch(findThunkDeviceSuccess(deviceFound));
      // }, 2500);
      console.log("device found",deviceFound)
      dispatch(findThunkDeviceSuccess(deviceFound));
    })
    .catch(err => {
      dispatch(findThunkDeviceFail(err));
    })
  };
};


const findThunkDeviceStarted = () => ({
  type: types.FIND_THUNK_DEVICE_STARTED
});

const findThunkDeviceSuccess = deviceFound => ({
  type: types.FIND_THUNK_DEVICE_SUCCESS,
  payload: {
    ...deviceFound
  }
});

const findThunkDeviceFail = error => ({
  type: types.FIND_THUNK_DEVICE_FAIL,
  payload: {
    error
  }
});

