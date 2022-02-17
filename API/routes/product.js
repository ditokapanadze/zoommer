import express from "express";
import {
  addProduct,
  getAllProducts,
  searchProduct,
} from "../controllers/product.js";

const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/getall", getAllProducts);
router.get("/search", searchProduct);
export default router;
