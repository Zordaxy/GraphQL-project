import mongoose, { mongo } from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  email: {
    type: String
  },
  language: {
    type: String
  },
  age: {
    type: Number
  }
});
const Friends = mongoose.model('friends', friendSchema);

export { Friends };