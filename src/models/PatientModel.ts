import Knex = require('knex');

export class PatientModel {

    listQuery(knex: Knex) {
        return knex.raw('select * from person where ref=?',[6]);
    }

    list(knex: Knex) {
        return knex('person').orderBy('ref','desc');
    }

    view(knex: Knex, id) {
        return knex('person').where('ref',id);
    }

    create(knex: Knex, data) {
        return knex('person').insert(data);
    }

    update(knex: Knex, id, data) {
        return knex('person').where('ref', id).update(data);
    }

    delete(knex: Knex, id) {
        return knex('person').where('ref', id).del();
    }
    deletes(knex: Knex, ids) {
        return knex('person').whereIn('ref', ids).del();
    }
}