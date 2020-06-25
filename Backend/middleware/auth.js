import jwt from 'jsonwebtoken';
import HTTPerror from 'http-errors';
import clienteDAO from '../model/cliente/dao.js';

const getTokenFrom = request => {
    const auth = request.get('authorization');

    if (auth && auth.toLowerCase().startsWith('bearer '))
        return auth.substring(7);

    return null;
}

const tokenVerify = async (token) => {

    const decodedToken = await jwt.verify(token, process.env.SECRET);

    return decodedToken;

};

const authClient = async (req, res, next) => {

    try {

        const token = getTokenFrom(req);
        //console.log(token);

        const decodedToken = await tokenVerify(token);

        if (!token || !decodedToken.id) {
            next(HTTPerror(401, { error: 'token invalid or missed' }))
        } else {

            const cliente = await clienteDAO.encontrarClientePorId(decodedToken.id);
            req["rol"] = cliente.rol;
            req['id'] = cliente._id;
            cliente === null ? next(HTTPerror(401, { error: 'token does not match user' })) :
                next();
        }

    } catch (error) {
        next(error)
    }
}

export default authClient;