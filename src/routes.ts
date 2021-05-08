import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('testing');
});

export default routes;