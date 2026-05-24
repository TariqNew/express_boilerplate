import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config, isDevelopment } from "../config/index.config.js";
import { routes } from "./routes.js";
import { errorHandler } from "../shared/middleware/errorHandler.js";

export function createApp() {
  const app = express();

  // Security middleware
  app.use(helmet());
  app.use(cors());

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logging middleware
  if (isDevelopment) {
    app.use(morgan("dev"));
  }

  // API routes
  app.use(config.apiPrefix, routes);

  // Health check endpoint (root level)
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Error handling middleware
  app.use(errorHandler);

  return app;
}
