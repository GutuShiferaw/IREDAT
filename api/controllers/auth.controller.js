import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const hashedEmail = bcryptjs.hashSync(email, 10);
  const newUser = new User({
    username,
    email: hashedEmail,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern && error.keyPattern.username) {
        res.status(400).json({ message: "Username already exists" });
      } else {
        next(error);
      }
    } else {
      next(error);
    }
  }
};

export const signin = async (req, res, next) => {
  const { identifier, password } = req.body;
  try {
    const validUser = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
