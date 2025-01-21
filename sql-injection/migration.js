const client = require("./db");

const createTableAndInsertData = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
    );
  `;

  const insertDataQuery = `
    INSERT INTO users (name, email) 
    VALUES 
      ('Alice', 'alice@example.com'),
      ('Bob', 'bob@example.com'),
      ('Charlie', 'charlie@example.com')
    ON CONFLICT DO NOTHING;
  `;

  try {
    await client.query(createTableQuery);
    console.log('Tabela "users" criada com sucesso!');

    await client.query(insertDataQuery);
    console.log("Dados inseridos com sucesso!");
  } catch (err) {
    console.error("Erro ao criar tabela ou inserir dados", err);
  }
};

createTableAndInsertData();
