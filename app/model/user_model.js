const db = require('../config/database')
const table = 'user'

exports.getUser = () => {
    return db.select().table(table);
}

exports.getBy = (id) => {
    return db(table).where('id', id);
}

exports.createUser = (data) => {
    return db(table).insert(data);
}