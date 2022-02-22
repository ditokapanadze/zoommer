import axios from "axios";

let data = {
  brands: ["apple", "xiaomi"],
  type: ["watch"],
};
axios.get("http://localhost:5001/products/filter", { data });
