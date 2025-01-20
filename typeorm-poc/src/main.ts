import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { orderRoutes } from "./routes/order-routes";

export function buildApp() {
  const app = Fastify();

  app.register(fastifySwagger, {
    openapi: {
      openapi: "3.0.0",
      info: {
        title: "TypeORM POC",
        version: "1.0.0",
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
  });

  app.register(fastifySwaggerUI, {
    theme: {
      title: "TypeORM POC",
    },
    routePrefix: "/swagger-ui",
  });

  app.register(orderRoutes);

  return app;
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 4000;
  const app = buildApp();

  app.listen({ port, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`Server listening at ${address}`);
    console.info(`Swagger documentation available at ${address}/swagger-ui`);
  });
}
