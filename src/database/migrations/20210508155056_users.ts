import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function(table) {
        table.uuid('user_id').primary();
        table.string('user_email').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());

    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

