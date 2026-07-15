import express from "express"
import { register, login, getProfile } from "../controllers/authController.js"
import {verifyToken} from "../middleware/authMiddleware.js"

export const authRouter = express.Router()


authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/profile", verifyToken, getProfile);