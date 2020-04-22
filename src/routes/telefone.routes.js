const router = require('express-promise-router')();
const telefoneController = require('../controller/TelefoneController');

// Definindo as rotas
router.get('/telefone', telefoneController.listAll);

module.exports = router;