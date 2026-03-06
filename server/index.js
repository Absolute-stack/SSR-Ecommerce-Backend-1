import "dotenv/config";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js";
import { authRouter } from "./routes/authRouter.js";
import { productRouter } from "./routes/productRouter.js";
import { orderRouter } from "./routes/orderRouter.js";

const app = express();
const PORT = process.env.API_PORT;
const FRONTEND = process.env.FRONTEND;

app.use(
  cors({
    origin: FRONTEND,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use("/api/auth", authRouter);
app.use("api/order", orderRouter);
app.use("/api/product", productRouter);

app.use("/", (req, res) => {
  return res.status(200).send(`<h1>API IS RUNNING...</h1>`);
});

app.listen(PORT, console.log(`API is running....on PORT:${PORT}`));
