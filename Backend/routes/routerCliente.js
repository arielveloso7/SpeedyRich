import Router from 'express';
import authClient from '../middleware/auth.js';
import create from '../controller/cliente/create.js';
import listOne from '../controller/cliente/listOne.js';
import list from '../controller/cliente/list.js';
import login from '../controller/cliente/login.js';
import update from '../controller/cliente/update.js';
import upload from '../storage/storage.js';

const router = Router();

router.route('/')
    .post(upload.single('image'), create)
    .get(authClient, list)


router.route('/login')
    .post(login)

router.route('/:id')
    .get(authClient, listOne)
    .post(update)

export default router;