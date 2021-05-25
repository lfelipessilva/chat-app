import { Request, Response } from 'express';

async function clientInterface(req: Request, res: Response) {
    return res.render('client');
}

async function adminInterface(req: Request, res: Response) {
    return res.render('client');
}


export { clientInterface, adminInterface };