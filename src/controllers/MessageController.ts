import { Request, Response } from 'express';

import { createUser, findUserByEmail } from '../services/UserService';
import { createMessage } from '../services/MessageService';
async function sendMessage(req: Request, res: Response) {
    const { name, email, text } = req.body;

    //check if email has already sent any messages
    let user = await findUserByEmail(email);

    if(!user){
        user = await createUser(email, name); 
    }
    
    const user_id = user.user_id;
    const message = await createMessage(text, user_id);

    return message;
}
export { sendMessage };