const { Client } = require("pg");

const config = {
    user: "zmtuforniykarf",
    database: "d8cfrbc7sqgi2r",
    password: "098539232b66e6655827d87c2bd8b7c7f831b72295e2ae50f39e6470716959ad",
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
  };

const client = new Client.Pool(config);

//const client = new Client({
    //connectionString: process.env.HEROKU_POSTGRESQL_RED_URL,
    //ssl: {
      //rejectUnauthorized: false
    //}
  //});

client.on("connect", () => {
    console.log("Connected to Postgres database.")
});

const createTables = () => {
    const personTable = 'CREATE TABLE IF NOT EXISTS person(id INT auto_increment PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, number INT NOT NULL, employer VARCHAR(100) NOT NULL)';
    client
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

client.on("remove", () => {
    console.log("client removed");
    process.exit(0);
});

module.exports = {
    createTables,
    client,
};

require("make-runnable");