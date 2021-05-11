import { Request, Response } from 'express';

import { get, insert } from '../services/ConnectionService';

async function getConnection(req: Request, res: Response) {
    const connections = await get();
    return res.json(connections);
}

function insertConnection(req: Request, res: Response) {
    const userUserPhone = req.body.user_phone;
    const addingUserPhone = req.body.adding_user_phone;
    
    insert(userUserPhone, addingUserPhone);
}

export { getConnection, insertConnection };