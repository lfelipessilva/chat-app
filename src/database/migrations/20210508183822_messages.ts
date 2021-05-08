import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messages', function(table) {
        table.uuid('message_id').primary();
        table.uuid('connection_id').unsigned();
        table.uuid('first_user_id').unsigned();
        table.uuid('second_user_id').unsigned();
        table.string('text');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('connection_id').references('connections.connection_id');
        table.foreign('first_user_id').references('connections.first_user_id');
        table.foreign('second_user_id').references('connections.second_user_id');
    });
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('messages');
}

