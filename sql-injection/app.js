const db = require("./db");

const app = require("fastify")();

app.get("/orders/:id", async (req, _) => {
  const { id } = req.params;

  const query = `SELECT * FROM tb_orders WHERE id = ${id}`;
  console.log("app.get ~ query", query);

  const res = await db.query(query);
  return res.rows;
});

app.listen({ port: 3000 }, () => {
  console.log("Servidor rodando na porta 3000");
});
