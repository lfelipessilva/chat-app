import knex from '../database';
import { v4 as uuid } from 'uuid';

async function createUser(email: string, name: string) {

    const user = {
        user_id: uuid(), 
        user_email: email, 
        user_name: name,
        created_at: Date.now()
    };

    try {
        await knex('users')
            .insert({ user_id: user.user_id, 
                user_email: user.user_email, 
                user_name: user.user_name,
                created_at: user.created_at});
        
    } catch (error) {
        return error;
    }


    return user;
}



async function findUserByEmail(email: string) {
    const user = await knex('users')
        .where('email', email)
        .first();

    const objectUser = {
        user_id: user.user_id,
        user_email: user.user_email,
        user_name: user.user_name
    };

    if(!objectUser.user_id){
        return undefined;
    }
    
    return objectUser;
}
export { createUser, findUserByEmail };