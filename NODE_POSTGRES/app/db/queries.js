const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'myplaceholder',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;