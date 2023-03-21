const express = require('express');
const router = express.Router();
const controller = require('../containers/form');
router.get('/',controller.home)
router.get('/form', controller.form);
router.post('/form', controller.formprocess);
router.get('/predicted',controller.predicted)
router.get('/notpredicted',controller.notpredicted)

module.exports = router