import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/product.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helooooo");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("mongo conected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server runniong on portn ${PORT}`));
