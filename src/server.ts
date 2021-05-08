import { http } from './http';
const port = 3001;

http.listen(port, () => {
    `Server listening on ${port}`;
});