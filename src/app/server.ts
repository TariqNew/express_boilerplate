import { createApp } from "./App.js";
import { config } from "../config/env.js";

export async function startServer() {
  const app = createApp();

  const server = app.listen(config.port, () => {
    console.log(
      `Server is running on http://localhost:${config.port}${config.apiPrefix}`,
    );
  });

  const shutdown = () => {
    console.log("Shutting down server...");
    server.close(() => {
      console.log("Server closed");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}
