import knex from '../database';
import { v4 as uuid } from 'uuid';

async function createMessage(text: string, user_id: string, admin_id ?: string) {
    const message = {
        message_id : uuid(),
        user_id : user_id,
        admin_id : admin_id || null,
        message_text : text,
        created_at: Date.now()
    };
    
    try {
        await knex('messages')
            .insert({ 
                message_id: message.message_id,
                user_id: message.user_id,
                admin_id: message.admin_id,
                message_text: message.message_text,
                created_at: message.created_at
            });
    } catch (error) {
        return error;
    }

    return message;
}


export { createMessage };
