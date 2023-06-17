const Client = require("pg");

const config = {
    adapter: "sails-postgresql",
    host: "ec2-18-211-172-50.compute-1.amazonaws.com",
    user: "zmtuforniykarf",
    database: "d8cfrbc7sqgi2r",
    password: "098539232b66e6655827d87c2bd8b7c7f831b72295e2ae50f39e6470716959ad",
    port: 5432,
    ssl: {rejectUnauthorized: false},
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
}; 

const client = new Client.Pool(config);

client.on("connect", () => {
    console.log("Connected to Postgres database.")
});

const createTables = () => {
    const personTable = 'CREATE TABLE IF NOT EXISTS person(id INT auto_increment PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, number INT NOT NULL, employer VARCHAR(100) NOT NULL)';
    client
        .query(personTable)
        .then((res) => {
            console.log(res);
            client.end();
        })
        .catch((err) => {
            console.log(err);
            client.end();
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