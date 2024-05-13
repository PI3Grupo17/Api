const sequelize = require('../configuration/postgresql');
const Grupo = require("../models/Grupo");
const GrupoRepository = sequelize.define('tb_grupo', Grupo, {freezeTableName: true});
module.exports = GrupoRepository;
