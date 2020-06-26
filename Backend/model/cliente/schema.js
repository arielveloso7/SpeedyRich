import mongoose from "mongoose";


const Schema = mongoose.Schema;

const solicitudSchema = new Schema({
    fecha_nacimiento: String,
    direccion: String,
    telefono: Number,
    email: String,
    ingresos: String,
    banco: String,
    estado: {
        type: String,
        default: 'Pendiente',
    },
    activo: {
        type: Boolean,
        default: true,
    }

});

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    clave: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: '',
    },
    image: String,
    solicitudes: [solicitudSchema]

});

clienteSchema.methods.setImgUrl = function setImgUrl(filename) {
    const localhost = 'http://localhost:3000';
    this.image = `${localhost}/public/${filename}`;
}

export { clienteSchema, solicitudSchema };