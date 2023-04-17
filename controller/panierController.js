const db = require('../models');

const Panier = db.panier;

const addProduitauPanier = async(req, res) => {

    let info = {
        idProd: req.body.idProd,
        idClient: req.body.idClient,
        quantity: req.body.quantity
    }
    const newProd = await Panier.create(info)
    res.status(200).send(newProd)
    console.log(newProd)
}


const getProduitauPanier = async(req, res) => {
    let id = req.params.id
    let ppanier = await Panier.findOne({ where: { id: id } })
    res.status(200).send(ppanier)
}

const updateProduitauPanier = async(req, res) => {
    let id = req.params.id
    let ppanier = await Panier.update(req.body, { where: { id: id } })
}

const deleteProduitauPanier = async(req, res) => {
    let id = req.params.id
    await Panier.destroy({ where: { id: id } })
    res.status(200).send("un Produit a eté remouver de Panier")
}
const deleteProduitClient = async(req, res) => {
    let id = req.params.id
    await Panier.destroy({ where: { idClient: id } })
}

const getAllById = async(req, res) => {
    let id = req.params.id
    let ppanier = await Panier.findAll({ where: { idClient: id } })
    res.status(200).send(ppanier)
}

module.exports = {
    addProduitauPanier,
    getProduitauPanier,
    updateProduitauPanier,
    deleteProduitauPanier,
    getAllById,
    deleteProduitClient
}