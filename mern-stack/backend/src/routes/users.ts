import express from "express";
import { getUser } from "../controllers/users";
import { verifyToken } from "../middleware/jwtAuth";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);

/* UPDATE */

export { router as userRouter };
