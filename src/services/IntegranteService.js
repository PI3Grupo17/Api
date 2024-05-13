// services/integranteService.js
const integranteRepository = require('../repository/IntegranteRepository');

class IntegranteService {
    static async getAll(req, res) {
        try {
            const integrantes = await integranteRepository.findAll();
            res.json(integrantes);
        } catch (error) {
            console.error('Error fetching integrantes:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }

    static async getById(req, res) {
        const id = req.params.id;
        try {
            //FILTRAR POR GRUPO ID
            const integrante = await integranteRepository.findAll();
            res.json(integrante);
        } catch (error) {
            console.error('Error fetching integrante by id:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }

    static async create(req, res) {
        const {nome, email, funcao, eixo, grupo} = req.body;
        try {
            const integrante = await integranteRepository.create({nome, email, funcao, grupo, eixo});
            res.status(201).json(integrante);
        } catch (error) {
            console.error('Error creating integrante:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }

    static async update(req, res) {
        const id = req.params.id;
        const {nome, email, funcao, eixo, groupId} = req.body;
        try {
            const integrante = await integranteRepository.findByPk(id);
            if (!integrante) {
                res.status(404).json({error: 'integranteRepository not found'});
            } else {
                await integrante.update({nome, email, funcao, eixo, groupId});
                res.json(integrante);
            }
        } catch (error) {
            console.error('Error updating integrante:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }

    static async remove(req, res) {
        const id = req.params.id;
        try {
            const integrante = await integranteRepository.findByPk(id);
            if (!integrante) {
                res.status(404).json({error: 'integranteRepository not found'});
            } else {
                await integrante.destroy();
                res.json({message: 'integranteRepository deleted successfully'});
            }
        } catch (error) {
            console.error('Error deleting integrante:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
}

module.exports = IntegranteService;
