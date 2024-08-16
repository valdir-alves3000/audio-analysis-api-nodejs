import audioService from "./audio-service.js";
import { convertToWav } from "./convertToWav.js";

export const analyzeAudioService = async (filePath, wavFilePath) => {
  const convertedPath = await convertToWav(filePath, wavFilePath);
  const model = await audioService.loadModel();
  const audioTensor = await audioService.preprocessAudio(convertedPath);
  const prediction = model.predict(audioTensor);
  const humanRecordedAudio = audioService.interpretPrediction(prediction);
  return humanRecordedAudio;
};
