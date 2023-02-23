//import crypto from "crypto";
import jwt from 'jsonwebtoken';
import { User } from "../models/user";
import dotenv from 'dotenv';

dotenv.config();

const {
  JWT_SECRET,
} = process.env

/* LOGGING IN */
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      //const isMatch = await crypto.compare(password, user.password);
      if (password != user.password) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      delete user.password;
      res.status(200).json({ token, user });
    } catch (err) {
      //The error is thrown from here 
      console.error("Error is in auth.js");
      res.status(500).json({ error: err.message });
    }
};

export { login };