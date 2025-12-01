import express from "express";
import noteController from "../controllers/noteControler.js";

const router = express.Router();

// Save notes
router.post("/", noteController.createNote);

// Render MD notes to HTML
router.post("/render", noteController.renderNote);

export default router;