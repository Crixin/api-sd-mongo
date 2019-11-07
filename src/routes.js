const express = require('express');

const routes = new express.Router();

const UserController = require('./controllers/UserControllers');
const WorkspaceController = require('./controllers/WorkspaceControllers');

//User
routes.get('/user', UserController.index);
routes.post('/user/register', UserController.create);

//Workspace
routes.get('/workspace', WorkspaceController.index);
routes.post('/workspace/create', WorkspaceController.create);




module.exports = routes;
