import { Request, Response } from 'express';

import { createUser, findUserByEmail } from '../services/UserService';
import { createMessage } from '../services/MessageService';

async function sendMessage(req: Request, res: Response) {
    const { name, email, text } = req.body;

    //check if email has already sent any messages
    let user = await findUserByEmail(email);

    if(user == undefined){
        user = await createUser(email, name); 
    }

    const message = await createMessage(text, user);

    res.json(message);
}

async function adminSendMessage(req: Request, res: Response) {

}

export { sendMessage, adminSendMessage };