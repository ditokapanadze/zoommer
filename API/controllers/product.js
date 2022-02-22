import { json } from "express";
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

// export const filterProduct = async (req, res) => {
//   const brands = ["apple", "jgj"];
//   console.log(brands);
//   var filteredProducts = [];

//   try {
//     brands.forEach(async (brand) => {
//       const product = await Product.find({ brand: new RegExp(brand, "i") });
//       filteredProducts.push(product);
//       if (filteredProducts.length === brands.length) {
//         res.status(200).json(filteredProducts);
//       }
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
export const filterProduct = async (req, res) => {
  // const brands = ["apple", "jgj"];\
  const { brands, type } = req.body;
  console.log(type);
  let filteredProducts = [];

  try {
    for (let i = 0; i < brands.length; i++) {
      const product = await Product.find({ brand: new RegExp(brands[i], "i") });
      product.length && filteredProducts.push(...product);
      console.log(product);
    }
    for (let i = 0; i < type.length; i++) {
      const product = await Product.find({ type: new RegExp(type[i], "i") });
      product.length && filteredProducts.push(...product);
      console.log(product);
    }

    res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
