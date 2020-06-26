import clienteDAO from '../../model/cliente/dao.js';
import bcrypt from 'bcrypt';
import path from 'path';

const create = async (req, res, next) => {
    try {

        const body = req.body;

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.clave, saltRounds);
        body.clave = passwordHash;

        const filename = req.file.originalname;

        const cliente = await clienteDAO.create(body, filename);
        res.status(201).json(cliente);

    } catch (error) {
        next(error);
    }
}

export default create;
