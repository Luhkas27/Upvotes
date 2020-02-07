const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://upvotes2020:upvotes2020@ds047057.mlab.com:47057/upvotes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(require('./routes'));

server.listen(5000, () => {
  console.log('Server started on port 5000');
});
