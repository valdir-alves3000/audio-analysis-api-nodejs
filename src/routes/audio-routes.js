import express from "express";
import { upload } from "../middware/uploadAudio.js";

import { audioController } from "../controllers/analyze-audio-controler.js";

const audioRoutes = express.Router();

audioRoutes.post(
  "/analyze",
  upload.single("audio"),
  audioController.analyzeAudio
);

export { audioRoutes };
