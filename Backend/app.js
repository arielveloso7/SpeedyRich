import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routerCliente from './routes/routerCliente.js';
import routerError from './routes/routerError.js';
import handleError from './middleware/handleError.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cliente', routerCliente);
app.use('/public', express.static(`${__dirname}/storage/imgs`));
app.use('*', routerError);


app.use(handleError.logError);
app.use(handleError.clientError);
app.use(handleError.genericError);

const PORT = process.env.PORT;

app.listen(PORT, _ => console.log('listen on:', PORT)); 