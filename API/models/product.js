import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  brand: { type: String, required: true },
  memory: { type: String },
  screen: { type: String },
  ram: { type: String },
  camera: { type: String },
  quantity: { type: Number, required: true },
});
export default mongoose.model("products", productSchema);
