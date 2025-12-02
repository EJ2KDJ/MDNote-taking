import express from "express";
import noteController from "../controllers/noteController.js";

const router = express.Router();

// Save notes
router.post("/", noteController.createNote);

// Render MD notes to HTML
router.post("/render", noteController.renderNote);

// Check grammer of notes
router.post("/check-grammer", noteController.checkGrammer);

export default router;