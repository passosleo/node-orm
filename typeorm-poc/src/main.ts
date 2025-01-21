import "reflect-metadata";
import "dotenv/config";
import fastify from "fastify";
import { AppDataSource } from "./db/datasource";
import { orderRoutes } from "./routes/order-routes";

const app = fastify();

app.register(orderRoutes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Banco de dados conectado!");
    await app.listen({ port: 3000 });
    console.log("Servidor rodando na porta 3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
