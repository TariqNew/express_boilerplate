import { HealthEntity } from "../entities/Health.entity.js";
import type { HealthResponseDto } from "../dto/HealthResponse.dto.js";

export class HealthService {
  getHealth(): HealthResponseDto {
    const health = new HealthEntity();
    return {
      status: health.status,
      uptime: health.uptime,
      timestamp: health.timestamp.toISOString(),
    };
  }
}
