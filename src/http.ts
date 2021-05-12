import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import routes from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/html'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
    console.log(`conectado como ${socket.id}`);
});

export { http,io };