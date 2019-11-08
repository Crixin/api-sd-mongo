const express = require('express');

const routes = new express.Router();

const UserController = require('./controllers/UserControllers');
const WorkspaceController = require('./controllers/WorkspaceControllers');
const EventoController = require('./controllers/EventoControllers');

//User
routes.get('/user', UserController.index);
routes.post('/user/register', UserController.create);

//Workspace
routes.get('/workspace', WorkspaceController.index);
routes.post('/workspace/create', WorkspaceController.create);

//Evento
routes.get('/evento', EventoController.index);
routes.post('/evento/create', EventoController.create);
routes.post('/evento/update', EventoController.update);




module.exports = routes;
