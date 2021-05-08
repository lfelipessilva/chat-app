import knex from '../database';
import { Request, Response } from 'express';

import { get, insert } from '../services/UserService';

async function getUsers(req: Request, res: Response) {
    const users = get();
    return res.json(users);
}

async function insertUser(req: Request, res: Response) {
    insert(req.body);
    return res.status(201);
}
export { getUsers, insertUser };