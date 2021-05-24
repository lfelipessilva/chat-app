import express from 'express';

import { sendMessage } from './controllers/MessageController';


const routes = express.Router();

routes.get('/message');
routes.post('/message', sendMessage);

routes.get('/admin');
routes.post('/admin');

export default routes;