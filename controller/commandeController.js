const db = require('../models')

const Commande = db.commande;

const nouveauCommande = async(req, res) => {
    let nvc = {
        dateCommande: req.body.dateCommande,
        moyenPaiement: req.body.moyenPaiement,
        totalCommande: req.body.totalCommande,
        paiementValide: req.body.paiementValide,
        idClient: req.body.idClient
    }
    const commande = await Commande.create(nvc)
    res.status(200).send(commande)
    console.log(commande)
}

const getHistoriqueCommandeparClient = async(req, res) => {
    let id = req.params.id
    let commande = await Commande.findAll({ where: { idClient: id } })
    res.status(200).send(commande)
    console.log(commande)
}

const getAllHistoriqueCommande = async(req, res) => {
    let commande = await Commande.findAll({})
    res.status(200).send(commande)
    console.log(commande)
}

const deleteAll = async(req, res) => {
    await Commande.destroy({})
    res.status(200).send("Toutes les Commande a ete effacer")
    console.log("Toutes les Commande a ete effacer")
}
const deleteparClient = async(req, res) => {
    let id = req.params.id;
    await Commande.destroy({ where: { idClient: id } })
    res.status(200).send("les Commande de ce Client ont éte effacer")
    console.log("les Commande de ce Client ont éte effacer")
}
const deleteOne = async(req, res) => {
    let id = req.params.id
    await Commande.destroy({ where: { id: id } })
    res.status(200).send("la commande a ete effacer")
    console.log("la commande a ete effacer")
}

module.exports = {
    nouveauCommande,
    getHistoriqueCommandeparClient,
    getAllHistoriqueCommande,
    deleteAll,
    deleteparClient,
    deleteOne
}