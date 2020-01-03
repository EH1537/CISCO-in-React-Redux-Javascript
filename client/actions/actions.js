import * as types from '../constants/actionTypes';
//this goes to the configure interface reducer, feeding the string of data that is being typed into the field
//as well as the id of said field, this will update the field in the state for store and also for display
export const interfaceConfig = (str, id) => ({
  type: types.INTERFACE_CONFIG,
  payload: {string: str, id: id}
});

//this goes to the Device reducer, feeding the string of data that is being typed into the field
//as well as the id of said field, this will update the field in the state for store and also for display
export const deviceConfig = (str, id) => ({
  type: types.DEVICE_CONFIG,
  payload: {string: str, id: id}
});

//create interface will use data already in store, thanks to interface config, 
//to invoke the input methods and spit a config out
export const createInterface = () => ({
  type: types.CREATE_INTERFACE,
  payload: ''
});
//------------------------------------------------------------------
//these are RENDERING TOGGLES ALL GOING TO TOGGLE REDUCER
//a toggle for render the create device form on the home page
export const createDeviceToggle = () => ({
  type: types.CREATE_DEVICE_TOGGLE,
  payload: ''
});
//a toggle for render the query device form on the home page
export const querryDeviceToggle = () => ({
  type: types.QUERRY_DEVICE_TOGGLE,
  payload: ''
})
//a toggle for render the create interface form on the home page
export const configureInterfaceToggle = () => ({
  type: types.CONFIGURE_INTERFACE_TOGGLE,
  payload: ''
});
//a toggle for render the second portion of the device querry (other buttons and fields displaying the found device)
export const deviceQuerry = () => ({
  type: types.DEVICE_QUERRY,
  payload: ''
});
//a toggle for redering the router or switch specific fields of the create device/query device
export const routerOrSwitchToggle = () => ({
  type: types.ROUTER_OR_SWITCH_TOGGLE,
  payload: ''
});
//-----------------------------------------------------
//creates a post request and sends the data for the device to the server
export const createDevice = () => ({
  type: types.CREATE_DEVICE,
  payload: ''
});
//creates the configuration, copying the configuration will be handled by a component function
export const generateConfig = () => ({
  type: types.GENERATE_CONFIG,
  payload: ''
});

//blanks all fields in the state
export const fieldBlanker = () => ({
  type: types.FIELD_BLANKER,
  payload: ''
});

//sends a delete request to the backend
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
      setTimeout(() => {
        console.log("device found",deviceFound)
        dispatch(findThunkDeviceSuccess(deviceFound));
      }, 2500);
      // console.log("device found",deviceFound)
      // dispatch(findThunkDeviceSuccess(deviceFound));
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

