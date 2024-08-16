import * as tf from "@tensorflow/tfjs-node";
import fs from "fs";
import WavDecoder from "wav-decoder";

const dirname = new URL(import.meta.url).pathname;

class AudioService {
  constructor() {
    this.TARGET_SAMPLE_SIZE = 16000;
  }

  async loadModel() {
    const modelUrl =
      "https://raw.githubusercontent.com/valdir-alves3000/audio-analysis-api-nodejs/main/audio_classifier_model/model.json";
    return await tf.loadLayersModel(modelUrl);
  }
  async preprocessAudio(filePath) {
    const buffer = fs.readFileSync(filePath);
    const audioData = await WavDecoder.decode(buffer);

    let audioTensor = tf.tensor(audioData.channelData[0]);
    const currentLength = audioTensor.shape[0];

    if (currentLength > this.TARGET_SAMPLE_SIZE) {
      audioTensor = audioTensor.slice(0, this.TARGET_SAMPLE_SIZE);
    } else if (currentLength < this.TARGET_SAMPLE_SIZE) {
      const padding = this.TARGET_SAMPLE_SIZE - currentLength;
      const paddedTensor = tf.pad(audioTensor, [[0, padding]]);
      audioTensor = paddedTensor;
    }

    const reshaped = audioTensor.reshape([1, this.TARGET_SAMPLE_SIZE, 1]);
    const normalized = reshaped.div(tf.scalar(255.0));

    return normalized;
  }

  interpretPrediction(prediction) {
    const predictionData = prediction.dataSync();
    return predictionData[0] > 0.5;
  }
}

export default new AudioService();
