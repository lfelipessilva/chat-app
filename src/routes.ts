import express from 'express';

import { showInterface } from './controllers/InterfaceController';
import { showLogin, login } from './controllers/LoginController';
import { getUsers, insertUser, putUser, delUser} from './controllers/UserController';
import { insertConnection, getConnection } from './controllers/ConnectionController';


const routes = express.Router();

routes.get('/users', getUsers);
routes.post('/users', insertUser);
routes.put('/users/:user_id', putUser);
routes.delete('/users/:user_id', delUser);

routes.post('/connections', insertConnection);
routes.get('/connections', getConnection);

routes.get('/login', showLogin);
routes.post('/login', login);

routes.get('/', showInterface);

export default routes;