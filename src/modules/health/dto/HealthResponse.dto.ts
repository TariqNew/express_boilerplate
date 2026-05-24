export type HealthResponseDto = {
  status: "ok" | "degraded" | "down";
  uptime: number;
  timestamp: string;
};
