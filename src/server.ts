import { http } from './http';
import './websocket/client';
import './websocket/admin';

const port = 3001;

http.listen(port, () => {
    console.log(`Server listening on ${port}`);
});