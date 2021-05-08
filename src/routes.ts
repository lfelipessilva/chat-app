import express from 'express';
import { getUsers, insertUser, putUser, delUser } from './controllers/UserController';

const routes = express.Router();

routes.get('/users', getUsers);
routes.post('/users', insertUser);
routes.put('/users', putUser);
routes.delete('/users', delUser);
export default routes;