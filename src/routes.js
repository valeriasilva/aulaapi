const express = require('express');
const router = express.Router();
var path = require('path');

const carroController = require('./controllers/carroController');

//router.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname, './client/index.html'));
//});

router.get('/carros', carroController.buscarTodos);
router.get('/carro/:id', carroController.buscarCarro);
//router.post('/carro', carroController.inserirCarro);
//router.put('/carro/:id', carroController.alterarCarro);
//router.delete('/carro/:id', carroController.excluirCarro);

module.exports = router;