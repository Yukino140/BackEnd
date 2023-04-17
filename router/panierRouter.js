const panierController = require('../controller/panierController.js')

const router = require('express').Router()

router.post('/addAuPanier/', panierController.addProduitauPanier);
router.get('/getUnProduit/:id', panierController.getProduitauPanier);
router.get('/:id', panierController.getAllById);
router.put('/:id', panierController.updateProduitauPanier);
router.delete('/:id', panierController.deleteProduitauPanier);
router.delete('/deleteAllofClient/:id', panierController.deleteProduitClient)

module.exports = router;