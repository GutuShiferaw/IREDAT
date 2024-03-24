import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
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

export default signup;
