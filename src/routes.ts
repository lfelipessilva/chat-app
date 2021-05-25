import express from 'express';

import { clientInterface, adminInterface } from './controllers/InterfaceController';
import { sendMessage, adminSendMessage } from './controllers/MessageController';

const routes = express.Router();

routes.get('/message', clientInterface);
routes.post('/message', sendMessage);

routes.get('/admin', adminInterface);
routes.post('/admin', adminSendMessage);

export default routes;