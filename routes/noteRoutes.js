import express from "express";
import noteController from "../controllers/noteControler.js";

const router = express.Router();

router.post("/", noteController.createNote);

export default router;