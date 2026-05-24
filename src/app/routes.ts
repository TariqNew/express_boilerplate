import { Router } from "express";
import { healthRouter } from "../modules/health/routes/health.routes.js";

export const routes = Router();

// Health module routes
routes.use("/health", healthRouter);

// Default route
routes.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});
