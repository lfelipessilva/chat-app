import knex from '../database';
import {v4 as uuid} from 'uuid';

async function get() {
    const connections = await knex('connections');
    return connections;
}

async function insert(userUserPhone, addingUserPhone) {

    const userData = await knex('users')
    .where({ user_phone: userUserPhone});
    const userId = userData[0].user_id;

    const addingUserData = await knex('users')
    .where({ user_phone: addingUserPhone});
    const addingUserId = addingUserData[0].user_id;

    console.log(userId, addingUserId);

    await knex('connections').insert({ 
        connection_id: uuid(),
        first_user_id: userId,
        second_user_id: addingUserId
    });
}

export { get, insert }; 