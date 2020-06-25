import clienteDAO from '../../model/cliente/dao.js';

const list = async (req, res, next) => {
    try {

        let params = {};
        if (req.rol !== 'Administrador')
            params = { _id: req.id };
        const clientes = await clienteDAO.list(params);

        res.status(201).json(clientes);

    } catch (error) {
        next(error);
    }
}

export default list;