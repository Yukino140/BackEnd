module.exports = (sequelize, DataTypes) => {

    const commande = sequelize.define("commande", {
        dateCommande: {
            type: DataTypes.DATE,
            allowNull: false
        },
        moyenPaiement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalCommande: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        paiementValide: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        idClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "clients",
                key: 'id',
            }
        }
    })
    return commande;
}