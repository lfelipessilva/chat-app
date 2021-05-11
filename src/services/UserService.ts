import knex from '../database';
import {v4 as uuid} from 'uuid';

async function get() {
    const users = await knex('users');
    return users;
}

async function insert(UserParams) {
    const { user_phone, user_name, user_bio } = UserParams;

    try{
        await knex('users').insert({
            user_id: uuid(),
            user_phone,
            user_name,
            user_bio
        });
    } catch(error) {
        return error;
    }
}

async function put(putParams, putId) {
    const { user_phone, user_name, user_bio } = putParams;
    await knex('users')
    .update({
        user_phone: user_phone,
        user_name: user_name,
        user_bio: user_bio
    })
    .where({ user_id: putId.user_id });
    console.log(putId);
}

async function del(delId) {
    await knex('users')
    .del()
    .where({ user_id: delId.user_id });
}

export { get, insert, put, del }; 