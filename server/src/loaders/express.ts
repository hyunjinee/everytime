import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import StatusCodes from "http-status-codes";
import path from "path";

import baseRouter from "../routes";

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

const options: cors.CorsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};

export default (app: Application): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors(options));

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
  }

  // Router
  app.use("/api", baseRouter);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(BAD_REQUEST).json({
      error: err.message,
    });
  });

  const viewsDir = path.join(__dirname, "views");
  app.set("views", viewsDir);
  const staticDir = path.join(__dirname, "public");
  app.use(express.static(staticDir));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile("index.html", { root: viewsDir });
  });
};
