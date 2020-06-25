import clienteDAO from '../../model/cliente/dao.js';

const listOne = async (req, res, next) => {
    try {
        const id = req.params.id;

        const cliente = await clienteDAO.listOne(id);

        res.status(201).json(cliente);

    } catch (error) {
        next(error);
    }
}

export default listOne;