import conexion from '../../mongo.js'
import { Cliente, Solicitud } from './model.js'

class clienteDAO {


    create(param, file) {
        const solicitud = new Solicitud(param.solicitud);

        const cliente = new Cliente({
            nombre: param.nombre,
            apellidos: param.apellidos,
            dni: param.dni,
            clave: param.clave,
            image: file,
        });

        cliente.solicitudes.push(solicitud);
        return cliente.save();

    }

    list(param) {
        //console.log(param)
        return Cliente.find(param);

    }

    listOne(id) {
        return Cliente.findById(id);
    }

    update(id, cliente) {
        return Cliente.findByIdAndUpdate(
            id,
            cliente,
            { 'new': true, 'useFindAndModify': false }
        );
    }

    encontrarCliente(cliente) {
        return Cliente.findOne(cliente);
    }

    encontrarClientePorId(id) {
        return Cliente.findById(id);
    }

}

export default new clienteDAO;