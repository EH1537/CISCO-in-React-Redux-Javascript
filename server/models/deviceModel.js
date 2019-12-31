const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://eh1537:morrowind@cluster0-wzs6a.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'CISCOdevices'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const deviceSchema = new Schema({
  RouterOrSwitch: {
    type: Boolean,
    required: true
  },
  nameString: {
    type: String,
    required: true
  },
  secretString: String,
  conString: String,
  auxString: String,
  bannerInString: String,
  //router only
  vtyString: String,
  //switch only
  vlanNumString: String,
  vlanIPString: String,
  vlanSubString: String,
  switchGateString: String,
});

// creats a model for the 'species' collection that will be part of the export
const Device = mongoose.model('device', deviceSchema);

module.exports = {
  Device,
}