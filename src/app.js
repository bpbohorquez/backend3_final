import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerUiExpress from "swagger-ui-express";
import { createHash, passwordValidation } from "./utils/index.js";
import jwt from "jsonwebtoken";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";
import config from "./utils/config.js";

import __dirname from "./utils/index.js";
import { addLogger } from "./utils/logger.js";

const app = express();
const PORT = 8080;
const connection = mongoose.connect(config.mongoURL);

app.use(express.json());
app.use(cookieParser());

app.use(addLogger);

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API AdoptMe",
      version: "1.0.0",
      description: "API de adopción de mascotas",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./docs/Users.yaml"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
