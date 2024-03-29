import express from "express";
import { mainProducts } from "../models/model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.category ||
      !req.body.brand ||
      !req.body.price ||
      !req.body.description ||
      !req.body.stock
    ) {
      return res.status(400).send({
        message: "error on post",
      });
    }

    const newProduct = {
      category: req.body.category,
      brand: req.body.brand,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
    };

    const product = await mainProducts.create(newProduct);

    return res.status(200).send(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allProduct = await mainProducts.find({});
    return res.status(200).json(allProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const singleProduct = await mainProducts.findById(id);

    return res.status(200).json(singleProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.category ||
      !req.body.brand ||
      !req.body.price ||
      !req.body.description ||
      !req.body.stock
    ) {
      return res.status(400).send({
        message: "error on post",
      });
    }
    const { id } = req.params;

    const result = await mainProducts.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "product not found" });
    }

    return res.status(200).send("updated successfully");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await mainProducts.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.status(404).send("product not found");
    }
    return res.status(200).send({ message: "product delete successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
