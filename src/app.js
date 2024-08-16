import cors from "cors";
import express from "express";
import "express-async-errors";
import fs from "node:fs";
import path from "node:path";
import swaggerUi from "swagger-ui-express";
import { audioRoutes } from "./routes/audio-routes.js";

const dirname = new URL(import.meta.url).pathname;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/audio", audioRoutes);

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(dirname, "..", "swagger.json"), "utf8")
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export { app };
