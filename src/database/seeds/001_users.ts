import { Knex } from 'knex';
import { v4 as uuid4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    await knex('users').insert([
        {
            user_id: uuid4(),
            user_phone: '+5561992795899',
            user_name: 'Luis Felipe',
            user_bio: 'A beautiful one'
        }
    ]);
};
