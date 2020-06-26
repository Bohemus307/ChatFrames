const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('../../config');

//const Router = require('./router/router.js');

const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = config.app.port;
app.use(express.static(path.join(__dirname, '/../../lib')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//app.use('/data', Router);

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
