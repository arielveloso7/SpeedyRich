import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HTTPerror from 'http-errors';
import clienteDAO from '../../model/cliente/dao.js';


const login = async (req, res, next) => {
    try {

        const body = req.body;

        const dni = await clienteDAO.encontrarCliente({ dni: body.dni });

        const claveCorrecta = dni === null ? false : await bcrypt.compare(body.clave, dni.clave);

        if (!(dni && claveCorrecta)) {
            next(HTTPerror(401, { message: 'DNI o clave incorrecta' }));
        } else {

            const clienteToken = {
                dni: dni.dni,
                id: dni._id
            }

            const token = await jwt.sign(clienteToken, process.env.SECRET);
            console.log(dni.rol);
            res.status(201).json({ token, "rol": dni.rol });
        }


    } catch (error) {
        next(error);
    }
}

export default login;