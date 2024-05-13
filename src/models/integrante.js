const { DataTypes } = require('sequelize');

const Integrante = {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    funcao: {
        type: DataTypes.STRING
    },
    grupo: {
        type: DataTypes.INTEGER, // Assumindo que grupoId é um número inteiro que referencia o id do grupo
        allowNull: false,
        references: {
            model: 'tb_grupo', // Nome da tabela de grupos
            key: 'id' // Nome da coluna na tabela de grupos que está sendo referenciada
        }
    },
    eixo: {
        type: DataTypes.STRING
    }
};

module.exports = Integrante;
