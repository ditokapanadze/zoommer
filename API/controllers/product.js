import mongoose from "mongoose";

import Product from "../models/product.js";

// პროდუქტის დამატება
export const addProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ყველა პროდუქტის წამოღება ბაზიდან
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const searchProduct = async (req, res) => {
  const query = req.query.search;

  try {
    const foundProduct = await Product.find({
      name: new RegExp(query, "i"),
    });
    res.status(200).json(foundProduct);
  } catch (err) {
    res.status(400).json({ message: "product not found" });
  }
};
