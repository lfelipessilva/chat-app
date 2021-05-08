import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function(table) {
        table.uuid('user_id').primary();
        table.string('user_phone').unique().notNullable();
        table.string('user_name').notNullable();
        table.string('user_bio');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

