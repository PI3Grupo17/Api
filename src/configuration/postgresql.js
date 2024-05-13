const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
//     host: process.env.PG_HOST,
//     dialect: 'postgres',
// });

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: '3.144.174.81',
    port: '443',
    dialect: 'postgres',
});

module.exports = sequelize;
