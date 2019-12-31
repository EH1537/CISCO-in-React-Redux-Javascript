const models = require('../models/deviceModel');
const fs = require('fs');
const path = require('path');
const deviceController = {};

const checker = ['RouterOrSwitch',
'nameString',
'secretString',
'conString',
'auxString',
'bannerInString',
'vtyString',
'vlanNumString',
'vlanIPString',
'vlanSubString',
'switchGateString'];

deviceController.getDevices = (req, res, next) => {
  //pull down the devices in the DUMP (will look into mongoose set up later)
  const results = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dump/devices.dev.json'), 'UTF-8'));
  console.log('in get devices');
  if (!results) {
    return next({
      log: 'deviceController.getDevices: ERROR: Error getting getDevices data from getDevices.dev.json file',
      message: { err: 'Error occurred in deviceController.getDevices. Check server logs for more details.' },
    });
  }
  else { //save into locals, we will add to that in addDevices
    console.log("post retrieval". results)
    res.locals.devices = results;
    return next();
  }
}

deviceController.addDevice = (req, res, next) => {
  //we have data in the res.locals files under devices it is an an object of objects, each 'key' is  a device name
  console.log('in add devices');

  let name = Object.keys(req.body)[0]; //the object from the request contains a key value pair, key is the name of the device
  console.log(req.body[name]);
  console.log(Object.keys(req.body[name]));
  // if (Object.keys(req.body[name]) !== checker) {
  //   return next({
  //     log: 'deviceController.addDevice: ERROR: Error from front end reqs',
  //     message: { err: 'Error occurred in deviceController.addDevice. Check server logs for more details.' }
  //   })
  // }

  models.Device.findOne({nameString: name}, (err,device) => {
    if (err) {
      return next({
        log: 'deviceController.addDevice: ERROR: Error from findOne in addDevice',
        message: { err: 'Error occurred in deviceController.addDevice. Check server logs for more details.' }
      });
    }
    else if (device === null) {
      models.Device.create(req.body[name], (err, device) => {
        if (err) {
          return next({
            log: 'deviceController.addDevice: ERROR: Error from adding document in addDevice',
            message: { err: 'Error occurred in deviceController.addDevice. Check server logs for more details.' }
          });
        }
        else {
          console.log("device created", device);
          return next();
        }
      })
    }})
  // }) 
  // models.Device.create(
  //   {
  //   RouterOrSwitch: true,
  //   nameString: "blargh",
  //   secretString: "abc123",
  //   conString: "abc123",
  //   auxString: "abc123",
  //   bannerInString: "abc123",
  //   vtyString: "abc123",
  //   vlanNumString: "abc123",
  //   vlanIPString: "abc123",
  //   vlanSubString: "abc123",
  //   switchGateString: "abc123",
  // }, (err, device) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   else {
  //     console.log(device);
  //   }
  // })
  // if (!results) {
  //   return next({
  //     log: 'deviceController.getDevices: ERROR: Error getting getDevices data from getDevices.dev.json file',
  //     message: { err: 'Error occurred in deviceController.getDevices. Check server logs for more details.' },
  //   });
  // }
  // else { //save into locals, we will add to that in addDevices
  //   console.log("post retrieval". results)
  //   res.locals.devices = results;
  //   return next();
},


deviceController.findDevice = (req, res, next) => {
  // write code here

  next();
},

deviceController.deleteDevice = (req, res, next) => {
  // write code here

  next();
},

module.exports = deviceController