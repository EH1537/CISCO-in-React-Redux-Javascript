/* eslint-disable function-paren-newline */
const express = require('express');

const deviceController = require('../controllers/deviceController');

const router = express.Router();

// router.post('/', deviceController.getDevices,
//   (req, res, next) => { 
//     console.log(res.locals.devices);
//     res.sendStatus(222);
//   } 
// );

router.post('/', deviceController.addDevice,
  (req, res, next) => { 
    res.sendStatus(200);
  } 
);

module.exports = router;