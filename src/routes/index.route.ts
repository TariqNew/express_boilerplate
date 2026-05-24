import { Router } from "express";
import { healthRouter } from "../health/health.routes.js";

export const router = Router();

router.use("/health", healthRouter);

router.get("/", (_req, res) => {
  res.json({ message: "Sample implementation API is running" });
});
