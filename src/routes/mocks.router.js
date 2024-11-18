import { Router } from "express";
import { mockPets } from "../controllers/mocks.controller.js";

const router = Router();

router.get("/mockingpets", mockPets);
router.post("/generateData");

export default router;
