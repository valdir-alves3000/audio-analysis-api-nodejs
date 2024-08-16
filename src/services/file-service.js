import fs from "fs";
import path from "path";

const dirname = new URL(import.meta.url).pathname;

class FileService {
  async removeFile(filePath) {
    fs.unlinkSync(filePath);
  }

  async ensureUploadsDirExists() {
    const uploadDir = path.join(dirname, "..", "..", "..", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  }
}

const fileService = new FileService();
export default fileService;
