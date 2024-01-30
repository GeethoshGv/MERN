import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
});

export const product = mongoose.model("product", productSchema);
