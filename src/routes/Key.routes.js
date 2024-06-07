const express = require('express');
const keyController = require('../controller/KeyController');
const keyRoutes = express.Router();

keyRoutes.post('/create', keyController.create.bind(keyController));
keyRoutes.delete('/delete/:id', keyController.delete.bind(keyController));

module.exports = keyRoutes;