const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String},
  age: { type: String, require: true },
  bio: { type: String },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Pet", petSchema);
