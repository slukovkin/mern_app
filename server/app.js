import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userRouts from "./routes/routes.js";

dotenv.config();

const PORT = process.env.PORT || 3005;
const DB = process.env.DB;

const server = express();
server.use(express.json());

server.use("/", userRouts);

async function start() {
  try {
    await mongoose.connect(DB);
    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
