import knex from '../database';
import {v4 as uuid} from 'uuid';

async function get() {
    return await knex('users');
}
async function insert(BodyParams) {
    const { user_phone, user_name, user_bio } = BodyParams;
    await knex('users').insert({
        user_id: uuid(),
        user_phone,
        user_name,
        user_bio
    });
}

export { get, insert }; 