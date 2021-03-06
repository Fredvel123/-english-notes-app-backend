const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('users', userSchema);