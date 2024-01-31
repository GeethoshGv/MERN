import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { mainProducts } from "./models/model.js";
import productrouter from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("<h1>zoro</h1>");
});

app.use("/products", productrouter);

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
