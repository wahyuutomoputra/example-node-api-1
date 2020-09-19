const db = require('../config/database')
const table = 'user'

exports.getBy = (username) => {
    return db(table).where('username', username).first();
}
