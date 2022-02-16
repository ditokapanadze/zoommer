import express from "express";
import { addProduct, getAllProducts } from "../controllers/product.js";

const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/getall", getAllProducts);
export default router;
