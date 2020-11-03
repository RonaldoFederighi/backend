const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidentController = require("./Controllers/IncidentController");
const ProfileController = require('./Controllers/PofileController');
const SectionController = require('./Controllers/SectionController');

const routes = express.Router();

// Listagem de ONGs
// Utiliza o metodo get sem passagem de parâmetros
// Rota: localhost:3333/ong 
routes.get('/ong', OngController.index);

// Cadastro de ONG
// Utiliza o metodo post passagem de parâmetro request.body
// Rota: localhost:3333/ong
routes.post('/ong', OngController.create);

// Listagem dos Incidentes cadastrados
// Utiliza o metodo get sem passagem de parâmetros
// Rota: localhost:3333/incidente 
routes.get('/incidente', IncidentController.index);

// Cadastro de Incidentes
// Utiliza o metodo post passagem de parâmetro request.body
// Rota: localhost:3333/incidente?titulo=incidente1&descricao='Descreve o incidente'&
routes.post('/incidente', IncidentController.create);

// Deletar incidente (deleta o registro com id 12)
// Utiliza o metodo delete passagem de parâmetro Routes params
// Rota: localhost:3333/incidente/12 
routes.delete('/incidente/:id', IncidentController.apagar);

// Fazer Login
// Utiliza o metodo post e passagem de parametros pelo header
// Rota: localhost:3333/section
routes.post('/section', SectionController.login);

// Fazer listagem de incidentes de uma ONG específica
// Utiliza o metodo post e passagem de parametros pelo header
// Rota: localhost:3333/profile
routes.post('/profile', ProfileController.index);

module.exports = routes