const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development);

const getAll = () => {
    return db('car-dealer');
}

const getById = id => {
    return db('car-dealer')
    .where({ id: id });
}

const insert = record => {
    return db('car-dealer')
    .insert(record);
}

const update = (id, record) => {
    return db('car-dealer')
    .where({ id: id })
    .update(record);
}

const remove = id => {
    return db('car-dealer')
    .where({ id: id })
    .delete();
}


module.exports = {
    getAll,
    getById,
    insert,
    update,
    remove
}