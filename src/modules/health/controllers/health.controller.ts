import type { Request, Response } from "express";
import { HealthService } from "../services/health.service.js";

const healthService = new HealthService();

export const getHealth = (_req: Request, res: Response) => {
  const health = healthService.getHealth();
  res.json(health);
};
