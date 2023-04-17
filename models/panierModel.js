const produitModel = require("./produitModel");

module.exports = (sequelize, DataTypes) => {

    const Panier = sequelize.define("panier", {

        idProd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "produits",
                key: 'id',
            }

        },
        idClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "clients",
                key: 'id',
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Panier
}