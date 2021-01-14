const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'vitaliy',
    host: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    password: process.env.PW1,       //this might be broken
    port: process.env.PGPORT
})

const queryTable = async (text, params) => {
    const rows = await pool.query(text, params);
    return rows;
}

module.exports = {
    queryTable
}

