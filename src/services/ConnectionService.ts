import knex from '../database';
import { v4 as uuid } from 'uuid';

async function createConnection(user_id, socket_id) {

    const connection = {
        connection_id: uuid(),
        user_id: user_id,
        socket_id: socket_id,
        admin_id: null,
        created_at: Date.now()
    };

    await knex('connections')
        .insert({
            connection_id: connection.connection_id,
            user_id: connection.user_id,
            socket_id: connection.socket_id,
            admin_id: connection.admin_id,
            created_at: connection.created_at
        });

    return connection;
}

async function findConnectionByUserId(user_id) {
    const connection = await knex('connections')
        .where({user_id: user_id});

    const objectConnection = connection[0];

    return objectConnection;
}

async function findAllWhitoutAdmin() {
    const whitoutAdmin = await knex('connections')
        .where({admin_id: null});

    return whitoutAdmin;
}
export { createConnection, findConnectionByUserId, findAllWhitoutAdmin};