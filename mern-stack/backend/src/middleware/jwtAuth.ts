import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/user';

dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(verified.id).select('-password');
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({err});
    throw new Error("Not Authorized");
  }
};

export { verifyToken };