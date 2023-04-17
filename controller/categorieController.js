const db = require('../models')

const Categorie = db.categorie;

const addCategorie = async(req, res) => {
    let info = {
        refCateg: req.body.refCateg
    }
    const categorie = await Categorie.create(info)
    res.status(200).send(categorie)
    console.log(categorie)
}

const getAllCategorie = async(req, res) => {
    let categorie = await Categorie.findAll({})
    res.status(200).send(categorie)
}

const getOneCategorie = async(req, res) => {
    let id = req.params.id
    let categorie = await Categorie.findOne({ where: { id: id } })
    res.status(200).send(categorie)
}


const updateCategorie = async(req, res) => {
    let id = req.params.id
    let categorie = await Categorie.update(req.body, { where: { id: id } })
    res.status(200).send(categorie)
}


const deleteCategorie = async(req, res) => {
    let id = req.params.id
    await Categorie.destroy({ where: { id: id } })
    res.status(200).send('la Categorie a ete supprimer!')
}

module.exports = {
    addCategorie,
    getAllCategorie,
    getOneCategorie,
    updateCategorie,
    deleteCategorie
}