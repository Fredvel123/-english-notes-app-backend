const express = require('express');
const app = express();
const cors = require('cors');
// settings
app.set('port', process.env.PORT || 8000);
// middlewares
app.use(express.json());
app.use(cors());

// routes
const userRouters = require('./routers/userRouter');
app.use('/api/users', userRouters);
// videos
const videoRouter = require('./routers/videosRouter');
app.use('/api/videos', videoRouter)

app.get('/', (req, res) => {
  res.send('server is online')
} ) 

module.exports = app;