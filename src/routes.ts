import express from 'express';
import { getUsers } from './controllers/UserController';

const routes = express.Router();

routes.get('/users', getUsers);

export default routes;