const grupoRepository = require('../repository/GrupoRepository');
const { Op } = require('sequelize');
class GrupoService {
    static async getAll(req, res) {
        try {
            const grupos = await grupoRepository.findAll();
            res.json(grupos);
        } catch (error) {
            console.error('Error fetching groups:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getById(req, res) {
        const id = req.params.id;
        try {
            const grupo = await grupoRepository.findByPk(id);
            if (!grupo) {
                res.status(404).json({ error: 'Grupo not found' });
            } else {
                res.json(grupo);
            }
        } catch (error) {
            console.error('Error fetching group by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getByNomeOuTema(req, res) {
        const termo = req.params.termo;
        try {
            const condicao = {
                where: {
                    [Op.or]: [
                        {
                            "nome": { [Op.iLike]: `%${termo}%` }
                        },
                        {
                            "tema": { [Op.iLike]: `%${termo}%` }
                        }
                    ]
                }
            };
            const grupos = await grupoRepository.findAll(condicao);
            if (!grupos) {
                res.status(404).json({ error: 'Grupo not found' });
            } else {
                res.json(grupos);
            }
        } catch (error) {
            console.error('Error fetching group by nome or tema');
            res.status(500).json({error: 'Internal error server'});
        }
    }

    static async create(req, res) {
        const { nome, tema, resumo } = req.body;
        try {
            const grupo = await grupoRepository.create({ nome, tema, resumo });
            res.status(201).json(grupo);
        } catch (error) {
            console.error('Error creating group:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async update(req, res) {
        const id = req.params.id;
        const { nome, tema, resumo } = req.body;
        try {
            const grupo = await grupoRepository.findByPk(id);
            if (!grupo) {
                res.status(404).json({ error: 'Grupo not found' });
            } else {
                await grupo.update({ nome, tema, resumo });
                res.json(grupo);
            }
        } catch (error) {
            console.error('Error updating group:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async remove(req, res) {
        const id = req.params.id;
        try {
            const grupo = await grupoRepository.findByPk(id);
            if (!grupo) {
                res.status(404).json({ error: 'Grupo not found' });
            } else {
                await grupo.destroy();
                res.json({ message: 'Grupo deleted successfully' });
            }
        } catch (error) {
            console.error('Error deleting group:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = GrupoService;
