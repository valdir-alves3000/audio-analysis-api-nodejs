import multer from "multer";
import path from "path";
import fileService from "../services/file-service.js";

await fileService.ensureUploadsDirExists();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const pathName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, pathName);
  },
});

const upload = multer({ storage });

export { upload };
