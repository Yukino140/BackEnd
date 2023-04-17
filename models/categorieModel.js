module.exports = (sequelize, DataTypes) => {

    const categorie = sequelize.define("categorie", {
        refCateg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


    return categorie
}