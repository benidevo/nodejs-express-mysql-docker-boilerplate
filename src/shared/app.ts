import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import environment from "../config/environment";
import logger from "morgan";
import errorHandler from "../shared/middlewares/errorHandler";
import rateLimiter from "../shared/middlewares/rateLimiter";
import routes from "../shared/routes";

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    require("./knex/db");

    this.app.use(
      logger("dev", {
        skip: (request: Request, response: Response) =>
          environment.nodeEnv === "test",
      })
    );
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(rateLimiter);
    this.setRoutes();
    this.app.use(errorHandler);
  }

  setRoutes() {
    this.app.get("/", (request: Request, response: Response) => {
      response.json({
        status: true,
        message: `Welcome To ${environment.appName}`,
      });
    });
    this.app.use("/api/v1", routes);
    this.app.use("*", (request: Request, response: Response) => {
      response.status(404).json({
        status: false,
        message: "Route not found",
      });
    });
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening at port ${parseInt(port)}`);
    });
  }
}
