import mongoose from 'mongoose';
import { clienteSchema, solicitudSchema } from './schema.js';

const Cliente = mongoose.model('cliente', clienteSchema);
const Solicitud = mongoose.model('solicitud', solicitudSchema);

export { Cliente, Solicitud };
