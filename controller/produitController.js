const db = require('../models')

const Produit = db.produit

const addProduit = async(req, res) => {
    let info = {
        refprod: req.body.refprod,
        nomProd: req.body.nomProd,
        prix: req.body.prix,
        idCateg: req.body.idCateg,
        image: req.body.image,
        description: req.body.description,
        prixAncient: req.body.prixAncient,
        prix: req.body.prix
    }

    const produit = await Produit.create(info)
    res.status(200).send(produit)
    console.log(produit)
}

const getAllProduit = async(req, res) => {
    let produit = await Produit.findAll({})
    res.status(200).send(produit)
}

const getOneProduit = async(req, res) => {
    let id = req.params.id
    let produit = await Produit.findOne({ where: { id: id } })
    res.status(200).send(produit)
}
const getProduitByCateg = async(req, res) => {
    let id = req.params.id
    let produits = await Produit.findAll({ where: { idCateg: id } })
    res.status(200).send(produits)
}

const updateProduit = async(req, res) => {
    let id = req.params.id
    let produit = await Produit.update(req.body, { where: { id: id } })
    res.status(200).send(produit)
}


const deleteProduit = async(req, res) => {
    let id = req.params.id
    await Produit.destroy({ where: { id: id } })
    res.status(200).send('le Produit a ete supprimer!')
}

module.exports = {
    addProduit,
    getAllProduit,
    getOneProduit,
    updateProduit,
    deleteProduit,
    getProduitByCateg
}