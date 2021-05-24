import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('connections', function(table) {
        table.uuid('connection_id').primary();
        table.uuid('user_id').unsigned();
        table.string('admin_id').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.foreign('user_id').references('users.user_id');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('connections');
}

