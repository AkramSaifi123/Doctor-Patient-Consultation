import express from "express";

import { createConsultation, getAllConsultations, getConsultationById, updateConsultationStatus } from "../controllers/consultationControllers.js";

import {verifyToken} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createConsultation);

router.get("/", verifyToken, getAllConsultations);

router.get("/:id", verifyToken, getConsultationById);

router.patch(
    "/:id/status",
    verifyToken,
    updateConsultationStatus
);

export default router;