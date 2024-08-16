import ffmpeg from 'fluent-ffmpeg';

export const convertToWav = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .toFormat('wav')
      .on('end', () => {
        resolve(outputPath);
      })
      .on('error', (err) => {
        reject(`Erro ao converter o áudio: ${err.message}`);
      })
      .save(outputPath);
  });
};
