const express = require('express');

const routes = new express.Router();

const EventoController = require('./controllers/EventoControllers');

//Evento
routes.get('/evento', EventoController.index);
routes.post('/evento/create', EventoController.create);
routes.post('/evento/delete', EventoController.delete);

module.exports = routes;
