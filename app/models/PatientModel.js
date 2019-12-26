"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PatientModel {
    listQuery(knex) {
        return knex.raw('select * from person where ref=?', [6]);
    }
    list(knex) {
        return knex('person').orderBy('ref', 'desc');
    }
    view(knex, id) {
        return knex('person').where('ref', id);
    }
    create(knex, data) {
        return knex('person').insert(data);
    }
    update(knex, id, data) {
        return knex('person').where('ref', id).update(data);
    }
    delete(knex, id) {
        return knex('person').where('ref', id).del();
    }
    deletes(knex, ids) {
        return knex('person').whereIn('ref', ids).del();
    }
}
exports.PatientModel = PatientModel;
//# sourceMappingURL=PatientModel.js.map