const { Client } = require("pg");

const client = new Client({
  user: "user",
  host: "localhost",
  database: "database",
  password: "password",
  port: 5437,
});

client
  .connect()
  .then(() => console.log("Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados", err));

module.exports = client;
