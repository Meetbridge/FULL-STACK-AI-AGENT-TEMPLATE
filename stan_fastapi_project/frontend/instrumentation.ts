
import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({
    serviceName: "stan_fastapi_project-frontend",
  });
}
