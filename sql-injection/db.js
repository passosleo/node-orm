const { Client } = require("pg");

const client = new Client({
  user: "prisma",
  host: "localhost",
  database: "prisma",
  password: "prisma",
  port: 5436,
});

client
  .connect()
  .then(() => console.log("Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados", err));

module.exports = client;
