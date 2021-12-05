const mongoose = require('mongoose');

const URI_DB = 'mongodb://localhost:27017/notes_english_db';
const configure = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(URI_DB, configure)
  .then(db => console.log("the database is connected :)"))
  .catch(err => console.log(err))