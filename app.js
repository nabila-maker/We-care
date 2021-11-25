import express from "express";
import env from "./src/config/env.js";
import Server from "./src/config/server.js";
// import middlewares from "./src/middlewares";
import errorHandler from "./src/middlewares/errorHandler.js";
import routes from "./src/modules/index.js";

const http = express();
const server = new Server(http);
// server.middlewares(middlewares);
server.routes(routes);
server.errorHandler(errorHandler);
server.start(env.app_port);
