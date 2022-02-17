import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res, next) => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split("")[1];
  //   console.log(token);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdG9rYXBhbmFkemUwQGdtYWlsLmNvbSIsIm5hbWUiOiJkaXRvIiwiaWF0IjoxNjQ1MDg0MjQ1LCJleHAiOjE2NDUwODQ4NDV9.ESIgIVSWfJaI-vjSrLpRMYxafZ3Ql2YBBLQZNa5wJjs";
  const secret =
    "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==";
  if (!token) {
    return res.status(401).json({ message: "not authorized" });
  }

  jwt.verify(token, secret, async (err, authData) => {
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
