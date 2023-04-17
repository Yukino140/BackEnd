const categorieModel = require("./categorieModel")

module.exports = (sequelize, DataTypes) => {

    const Produit = sequelize.define("produits", {

        refprod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nomProd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idCateg: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "categories",
                key: 'id',
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prixAncient: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        prix: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    })




    return Produit
}