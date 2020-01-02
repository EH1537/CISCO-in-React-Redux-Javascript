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


deviceController.addDevice = (req, res, next) => {
  //we have data in the res.locals files under devices it is an an object of objects, each 'key' is  a device name
  console.log('in add devices');

  let name = Object.keys(req.body)[0]; //the object from the request contains a key value pair, key is the name of the device

  models.Device.findOne({ nameString: name }, (err, device) => {
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
    }
  })
};


deviceController.findDevice = (req, res, next) => {
  console.log('in find devices');
  console.log(req.query)
  let name = req.query.id;
  models.Device.findOne({ 'nameString': name }, (err, device) => {
    if (err) {
      return next({
        log: 'deviceController.addDevice: ERROR: Error from findOne in findDevice',
        message: { err: 'Error occurred in deviceController.findDevice. Check server logs for more details.' }
      });
    }
    else if (device === null) {
      res.locals.device = device;
      return next();
    }
    else {
      console.log('device found', device);
      res.locals.device = device;
      return next();
    }
  })
};

deviceController.deleteDevice = (req, res, next) => {
  console.log('in delete devices');
  console.log(req.query)
  let name = req.query.id;
  models.Device.findOneAndRemove({ 'nameString': name }, (err, device) => {
    if (err) {
      return next({
        log: 'deviceController.deleteDevice: ERROR: Error from findOnefindOneAndRemove in deleteDevice',
        message: { err: 'Error occurred in deviceController.deleteDevice. Check server logs for more details.' }
      });
    }
    else if (device === null) {
      console.log('device missing');
      return next();
    }
    else {
      console.log('device deleted', device);
      return next();
    }
  })
};

module.exports = deviceController