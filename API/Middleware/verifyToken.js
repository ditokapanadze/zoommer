import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res, next) => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split("")[1];
  //   console.log(token);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdG9rYXBhbmFkemUwQGdtYWlsLmNvbSIsIm5hbWUiOiJkaXRvIiwiaWF0IjoxNjQ1MDg1OTcwLCJleHAiOjE2NDUwODk1NzB9.Qk4GD-aGNnZu9GojA_3-IUcQVHX6n23uEFsakJE2CPo";

  if (!token) {
    return res.status(401).json({ message: "not authorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      return res.status(401).json({ message: "invalid token" });
    } else {
      const user = await User.findOne({ email: authData.email });
      if (!user) {
        return res.status(403).json({ message: "user not found" });
      }
      req.user = user;
      next();
    }
  });
};

export default verifyToken;
