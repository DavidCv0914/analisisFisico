import { Router } from "express";
import { infoMuestra } from "../controllers/physicalAnalysis.js";

export const analysis = Router()

analysis.post("/infoMuestra",infoMuestra)