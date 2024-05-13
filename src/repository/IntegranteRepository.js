const sequelize = require('../configuration/postgresql');
const Integrante = require("../models/integrante");
const IntegranteRepository = sequelize.define('tb_integrante', Integrante, {freezeTableName: true});
module.exports = IntegranteRepository;
