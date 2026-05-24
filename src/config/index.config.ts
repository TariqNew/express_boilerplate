export const config = {
  port: Number(process.env.PORT ?? 5000),
  apiPrefix: process.env.API_PREFIX ?? "/api/v1",
  nodeEnv: process.env.NODE_ENV ?? "development",
};

// Database configuration setup
export const databaseConfig = {
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 5432),
  database: process.env.DB_NAME ?? "app",
  username: process.env.DB_USER ?? "user",
  password: process.env.DB_PASSWORD ?? "password",
  synchronize: process.env.NODE_ENV === "development",
  logging: process.env.NODE_ENV === "development",
};

// Logger configuration placeholder
export const loggerConfig = {
  level: process.env.LOG_LEVEL ?? "info",
  format: "json",
  colorize: process.env.NODE_ENV === "development",
};

// Checking the state of project
export const isProduction = config.nodeEnv === "production";
export const isDevelopment = config.nodeEnv === "development";
