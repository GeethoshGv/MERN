import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("<h1>zoro</h1>");
});

mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("app is connected to the database");

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
