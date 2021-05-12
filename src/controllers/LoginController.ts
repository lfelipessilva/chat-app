import { Request, Response } from 'express';

import { getUserByPhone } from '../services/UserService';
import { showInterface } from './InterfaceController';

function showLogin(req: Request, res: Response) {
    return res.render('login');
}

async function login(req: Request, res: Response) {
    const { user_phone } = req.body;

    const interfaceData = await getUserByPhone(user_phone);

    if(interfaceData) {
        return res.redirect('/');
    } else {
        return res.redirect('/error');
    }
}
export { showLogin, login };