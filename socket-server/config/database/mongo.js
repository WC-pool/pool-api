const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const wcpchatSchema = mongoose.Schema({
  userName: String,
  message: String,
  userId: String,
},
{
  timestamps: true
}
)

const storeWcpchat = (userName, message, userId, callback) => {
  
  new Wcpchat({
    userName: userName,
    message: message,
    userId: userId
  }).save((err, data) => {
    if (err) {
      console.log('Error in storewcpchat: ', err);
      callback(err, null);
    } else {
    callback(null, data);
  }
})

}

const Wcpchat = mongoose.model('Wcpchat', wcpchatSchema);

module.exports.Wcpchat = Wcpchat;
module.exports.storeWcpchat = storeWcpchat;
