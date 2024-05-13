// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/configuration/postgresql');
const GrupoService = require('./src/services/GrupoService');
const IntegranteService = require('./src/services/IntegranteService');

const app = express();

app.use(bodyParser.json());

// Rotas para os grupos
app.get('/grupos', GrupoService.getAll);
app.get('/grupos/:id', GrupoService.getById);
app.get('/grupos/buscar/:termo', GrupoService.getByNomeOuTema);
app.post('/grupos', GrupoService.create);
app.put('/grupos/:id', GrupoService.update);
app.delete('/grupos/:id', GrupoService.remove);

// Rotas para os integrantes
app.get('/integrantes', IntegranteService.getAll);
app.get('/integrantes/:id', IntegranteService.getById);
app.post('/integrantes', IntegranteService.create);
app.put('/integrantes/:id', IntegranteService.update);
app.delete('/integrantes/:id', IntegranteService.remove);

(async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Tabelas sincronizadas com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar tabelas:', error);
    }
})();


// Inicie o servidor Express
app.listen(8080, () => {
    console.log(`Servidor rodando na porta ${8080}`);
});