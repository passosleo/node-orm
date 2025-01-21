import "dotenv/config";
import fastify from "fastify";
import { orderRoutes } from "./routes/order-routes";

const app = fastify();

app.register(orderRoutes);

const startServer = async () => {
  try {
    await app.listen({ port: 4000 });
    console.log("Servidor rodando na porta 4000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
