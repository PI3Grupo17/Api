const { DataTypes } = require('sequelize');

const Grupo = {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tema: {
        type: DataTypes.STRING
    },
    resumo: {
        type: DataTypes.TEXT
    }
};

module.exports = Grupo;
