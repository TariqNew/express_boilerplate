export interface IHealthResponse {
  status: "ok" | "degraded" | "down";
  uptime: number;
  timestamp: string;
}
