import multer from "multer";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cloudinaryStorage = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary"); // ← full module, not v2

// Configure it
import "dotenv/config";
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary, // ← pass full module so .v2 is accessible
  folder: "ssr-ecommerce1/productimages",
  allowedFormats: ["jpg", "jpeg", "png", "webp", "avif"],
  transformation: [
    { width: 800, height: 800, crop: "limit" },
    { quality: "auto", fetch_format: "auto" },
  ],
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ALLOWED_MIME_TYPES = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif",
    ];
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
    }
  },
});
