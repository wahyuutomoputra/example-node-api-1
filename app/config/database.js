const db = require("knex")(
    {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'icon0SSgandul',
            database: 'siswa'
        }
    }
)

module.exports = db;