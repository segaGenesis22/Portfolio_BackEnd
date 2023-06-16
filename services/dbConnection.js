const pg = require("pg");

const config = {
    adapter: 'sails-mysql',
    user: "zmtuforniykarf",
    host: "ec2-18-211-172-50.compute-1.amazonaws.com",
    database: "d8cfrbc7sqgi2r",
    password: "098539232b66e6655827d87c2bd8b7c7f831b72295e2ae50f39e6470716959ad",
    port: 5432,
    max: 10,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("Connected to Postgres database.")
});

const createTables = () => {
    const personTable = 'CREATE TABLE IF NOT EXISTS person(id INT auto_increment PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, number INT NOT NULL, employer VARCHAR(100) NOT NULL)';
    pool
        .query(personTable)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

pool.on("remove", () => {
    console.log("client removed");
    process.exit(0);
});

const client = new pg({
    connectionString: process.env.HEROKU_POSTGRESQL_RED_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports = {
    createTables,
    pool,
};

require("make-runnable");