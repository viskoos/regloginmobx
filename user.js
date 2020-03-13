const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  login: String,
  password: String,
  name: String,
  lastName: String,
  age: Number
})

const User = mongoose.model("user", UserSchema)

module.exports = User
