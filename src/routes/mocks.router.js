import { Router } from "express";
import { mockPets, generateMockData } from "../controllers/mocks.controller.js";

const router = Router();

router.get("/mockingpets", mockPets);
router.post("/generateData", generateMockData);

export default router;
