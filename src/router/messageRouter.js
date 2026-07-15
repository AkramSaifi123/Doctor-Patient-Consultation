import express from "express";

import {
    sendMessage,
    getMessages
} from "../controllers/messageController.js";

import {verifyToken} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
    "/:id/messages",
    verifyToken,
    sendMessage
);

router.get(
    "/:id/messages",
    verifyToken,
    getMessages
);

export default router;