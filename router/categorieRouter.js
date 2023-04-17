categorieController = require('../controller/categorieController.js')

const router = require('express').Router()

router.post('/add', categorieController.addCategorie);
router.get('/getCategorie', categorieController.getAllCategorie);
router.get('/:id', categorieController.getOneCategorie);
router.put('/:id', categorieController.updateCategorie);
router.delete('/:id', categorieController.deleteCategorie);

module.exports = router