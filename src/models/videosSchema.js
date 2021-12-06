const { Schema, model } = require('mongoose');

const videosSchema = new Schema({
  title_video: {
    type: String,
    require: true,
  },
  thumbnail:{
    type: String,
    require: true,
    unique: true
  },
  videoId: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model('videos', videosSchema);