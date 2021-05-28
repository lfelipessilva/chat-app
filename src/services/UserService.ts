import knex from '../database';
import { v4 as uuid } from 'uuid';

async function createUser(email: string) {

    const user = {
        user_id: uuid(), 
        user_email: email, 
        created_at: Date.now()
    };

    try {
        await knex('users')
            .insert({ 
                user_id: user.user_id, 
                user_email: user.user_email, 
                created_at: user.created_at
            });
    } catch (error) {
        return error;
    }

    return user;
}

async function findUserByEmail(email: string) {
    const user: any = await knex('users')
        .where('user_email', email);
    
    if(!user[0]){
        return undefined;
    }
    
    return user[0];
}
export { createUser, findUserByEmail };