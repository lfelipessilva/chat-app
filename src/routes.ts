import express from 'express';
import { getUsers, insertUser, putUser, delUser } from './controllers/UserController';

const routes = express.Router();

routes.get('/users', getUsers);
routes.post('/users', insertUser);
routes.put('/users/:user_id', putUser);
routes.delete('/users/:user_id', delUser);

export default routes;