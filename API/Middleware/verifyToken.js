import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res, next) => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split("")[1];
  //   console.log(token);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdGVzdG9AZ21hYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjQ1MDIxMDYyLCJleHAiOjE2NDUwMjQ2NjJ9.cc1Fo4OmwC_OLH0InWIUxF7rmH4i7sq-xGlh0-euyWM";
  const secret =
    "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==";
  if (!token) {
    return res.status(401).json({ message: "not authorized" });
  }

  //   try {
  //     const decoded = jwt.verify(token, secret);
  //     if (!decoded) {
  //       return res.status(401).json({ message: "invalid token" });
  //     }
  //     console.log(decoded);
  //     const user = await User.findOne(decoded.id);
  //     if (!user) {
  //       return res.status(403).json({ message: "user not found" });
  //     }
  //     req.user = user;
  //     next();
  //   } catch (err) {
  //     console.log(err);
  //   }
  jwt.verify(token, secret, async (err, authData) => {
    if (err) {
      return res.status(401).json({ message: "invalid token" });
    } else {
      const user = await User.findOne(authData.id);
      if (!user) {
        return res.status(403).json({ message: "user not found" });
      }
      req.user = user;
      next();
    }
  });
};

export default verifyToken;
