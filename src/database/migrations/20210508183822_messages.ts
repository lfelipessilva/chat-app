import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messages', function(table) {
        table.uuid('message_id').primary();
        table.uuid('user_id').unsigned();
        table.uuid('admin_id').nullable();
        table.string('message_text');
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.foreign('user_id').references('users.user_id');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('messages');
}

