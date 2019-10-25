const express = require('express');

const routes = new express.Router();

const UserController = require('./controllers/UserControllers');

routes.get('/user', UserController.index);
routes.post('/user/register', UserController.create);


module.exports = routes;
