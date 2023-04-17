const clientController = require('../controller/clientController.js')

const router = require('express').Router()

router.post('/register', clientController.register);
router.post('/login', clientController.login);


module.exports = router