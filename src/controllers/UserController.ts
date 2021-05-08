import knex from '../database';
import { Request, Response } from 'express';

function getUsers(req: Request, res: Response) {
    knex('users').then(users => res.json(users));
}

export { getUsers };