import geminiController from "../controllers/gemini.controller.js";
import express from "express";

const router = express.Router();

router.post("/getPrompt", geminiController.getPropmt);

export default router;
