(function() {

  'use strict';

  const app = require('./app');
  const debug = require('debug')('herman-express:server');
  const http = require('http');

  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);

  const server = http.createServer(app);
  const io = require('socket.io').listen(server.listen(port));

  //server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  io.sockets.on('connection', (socket) => {
    socket.emit('message', {
      from: 'user1',
      message: 'Hi, I\'m Tom! \n I also love cats. \n Do you have any dogs?'
    });
    socket.on('send', (data) => {
      io.sockets.emit('message', data);
    });
  });

  function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

}());
