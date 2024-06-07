const express = require('express');
const keyRoutes = require('./Key.routes');
const messageRoutes = require('./Message.routes');
const routes = express.Router();

routes.use('/key', keyRoutes);
routes.use('/message', messageRoutes);

module.exports = routes;