import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("<h1>zoro</h1>");
});

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});
