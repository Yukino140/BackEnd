const produitController = require('../controller/produitController.js');

const router = require('express').Router();

router.post('/add', produitController.addProduit)
router.get('/getProduits', produitController.getAllProduit)
router.get('/:id', produitController.getOneProduit)
router.get('/getProduitByCateg/:id', produitController.getProduitByCateg)
router.put('/:id', produitController.updateProduit)
router.delete('/:id', produitController.deleteProduit)

module.exports = router;