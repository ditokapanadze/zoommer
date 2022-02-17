import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import verifyToken from "../Middleware/verifyToken.js";
dotenv.config();

export const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already in use, did you forget your password",
      });
    }
    const hash = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hash,
      name,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==",
      {
        expiresIn: "1h",
      },
    );
    res.status(201).json({ newUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with this email does not exist" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = await jwt.sign(
      { email: user.email, name: user.name },
      "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==",
      {
        expiresIn: "1h",
      },
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const ttt = async (req, res, next) => {
  console.log(req.user);
};
