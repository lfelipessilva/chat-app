import knex from '../database';
import { Request, Response } from 'express';

import { get, insert, put, del } from '../services/UserService';

async function getUsers(req: Request, res: Response) {
    const users = await get();
    return res.json(users);
}

function insertUser(req: Request, res: Response) {
    insert(req.body);
}

function putUser(req: Request, res: Response) {
    put(req.body);
}

function delUser(req: Request, res: Response) {
    del(req.body);
}

export { getUsers, insertUser, putUser, delUser };