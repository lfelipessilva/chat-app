import express from 'express';
import { getUsers, insertUser, putUser, delUser } from './controllers/UserController';
import { insertConnection, getConnection } from './controllers/ConnectionController';
import { indexInterface } from './controllers/interfaceController';

const routes = express.Router();

routes.get('/users', getUsers);
routes.post('/users', insertUser);
routes.put('/users/:user_id', putUser);
routes.delete('/users/:user_id', delUser);

routes.post('/connections', insertConnection);
routes.get('/connections', getConnection);

routes.get('/', indexInterface);


export default routes;