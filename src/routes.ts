import express from 'express';
import { getUsers, insertUser } from './controllers/UserController';

const routes = express.Router();

routes.get('/users', getUsers);
routes.post('/users', insertUser);
export default routes;