const commandeController = require('../controller/commandeController.js')

const router = require('express').Router()


router.post('/nouveauCommande', commandeController.nouveauCommande);
router.get('/getOne/:id', commandeController.getHistoriqueCommandeparClient);
router.get('/getAll', commandeController.getAllHistoriqueCommande);
router.delete('/deleteOne/:id', commandeController.deleteOne);
router.delete('/deleteAll', commandeController.deleteAll);
router.delete('/deleteParClient/:id', commandeController.deleteparClient);

module.exports = router;