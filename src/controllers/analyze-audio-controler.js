import path from "path";
import { analyzeAudioService } from "../services/analyze-audio-service.js";
import fileService from "../services/file-service.js";

class AudioController {
  async analyzeAudio(req, res) {
    if (!req.file) {
      return res.status(400).send("Nenhum arquivo enviado.");
    }
    const wavFilePath = path.join("uploads", `${Date.now()}.wav`);
    try {
      const humanRecordedAudio = await analyzeAudioService(
        req.file.path,
        wavFilePath
      );
      res.json({ humanRecordedAudio });
    } catch (error) {
      console.error("Erro ao analisar o áudio:", error);
      res.status(500).send("Erro ao analisar o áudio.");
    } finally {
      await fileService.removeFile(req.file.path);
      await fileService.removeFile(wavFilePath);
    }
  }
}

const audioController = new AudioController();
export { audioController };
