import clienteDAO from '../../model/cliente/dao.js';

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        //console.log(body);
        const cliente = await clienteDAO.update(id, body);

        res.status(201).json(cliente);

    } catch (error) {
        next(error);
    }
}

export default update;