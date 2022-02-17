import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import verifyToken from "../Middleware/verifyToken.js";
import sendEmail from "../utils/mailer.js";
dotenv.config();

export const registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // chek if email is alreadi=y used
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already in use, did you forget your password",
      });
    }

    // generated hash password
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hash,
      name,
    });

    // generate token
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      // "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==",
      process.env.JWT_SECRET,
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
    // chek if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with this email does not exist" });
    }

    // chek if password is correct
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // generate token'
    console.log(process.env.JWT_SECRET);
    const token = await jwt.sign(
      { email: user.email, name: user.name },
      process.env.JWT_SECRET,
      // "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==",
      {
        expiresIn: "1h",
      },
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const generateRessetToken = async (req, res, next) => {
  const { resetEmail } = req.body;
  console.log(resetEmail);
  try {
    // chek if user exists
    const user = await User.findOne({ email: resetEmail });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    // generate reset token
    const resetToken = await jwt.sign(
      { email: user.email, name: user.name },
      process.env.JWT_SECRET,
      // "CnsyiR1YYwsckdRT0kiDntMbNenoeg2eTTzDpRoJuFnjMHR7H6/wOFhuqQ1+X+mtB8mSsDiqeIRXINIKeqinqLd3CZGVYsaJosCPVD+c9EPS9X9utCeg3etVPlJ81PKmrxKVO7rKp95H4Gdh1pE8IMTanLQHPmYwxNm3+JsAw7hRkyxaGc/+xQ4QSAgK/nSzchmCnOJVJ9tSECi2waNMTVkhH8Kc4AA6MhC3XPoI0gFSTL8SMIU0B3JHJVYAyFRKzZgEANHqhEWnkDXRhkFqBzTDvrBGZKqSmu5BNs1/l6R4ge4YBDG44ZJXbE7Uf7lpe74yxq8DIJzSxeqKStNwlw==",
      { expiresIn: "600s" },
    );
    const resetUrl = `http://localhost:5001/passwordreset/${resetToken}`;

    // emial text
    const message = `
    <h1>You have requested a password reset</h1>
    <p>Please make a put request to the following link:</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
  `;
    await sendEmail({
      to: user.email,
      subject: "passwors reset",
      text: message,
    });
    res.status(200).json({ message: "mail sent" });
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (req, res, next) => {
  const user = req.user;
  const { newPassword } = req.body;
  console.log(user);

  try {
    // find user
    const newUser = await User.findOne({ email: user.email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }

    //generate has password
    const hash = await bcrypt.hash(newPassword, 12);
    newUser["password"] = hash;
    await newUser.save();

    res.status(201).json({ message: "password changed" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
