const express = require('express');
const messageController = require('../controller/MessageController');
const messageRoutes = express.Router();

messageRoutes.post('/create', messageController.create.bind(messageController));
messageRoutes.get('/show/:keyId', messageController.show.bind(messageController));

module.exports = messageRoutes;