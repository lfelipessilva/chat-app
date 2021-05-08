import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('connections', function(table) {
        table.uuid('connection_id').primary();
        table.uuid('first_user_id').unsigned();
        table.uuid('second_user_id').unsigned();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.foreign('first_user_id').references('users.user_id');
        table.foreign('second_user_id').references('users.user_id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('connections');
}

