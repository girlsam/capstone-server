(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const userRoute = require('../routes/users');
    const roomsRoute = require('../routes/rooms.js');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/users', userRoute);
    app.use('/rooms', roomsRoute);

  };

})(module.exports);
