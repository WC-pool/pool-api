const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wcpool');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const chatSchema = mongoose.Schema({
  userName: String,
  userImage: String,
  message: String,
  userId: Number,
},
{
  timestamps: true
}
)

const Chat = mongoose.model('Chat', chatSchema);

module.exports.Chat = Chat;