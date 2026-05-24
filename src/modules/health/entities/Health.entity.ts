export class HealthEntity {
  status: "ok" | "degraded" | "down";
  uptime: number;
  timestamp: Date;

  constructor() {
    this.status = "ok";
    this.uptime = process.uptime();
    this.timestamp = new Date();
  }
}
