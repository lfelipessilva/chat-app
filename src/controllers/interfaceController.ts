import { Request, Response } from 'express';

async function showInterface(req: Request, res: Response) {
    return res.render('index');
}


export { showInterface };