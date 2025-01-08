import { Router } from "express";
import sessionsController from "../controllers/sessions.controller.js";
import { handlePolicies } from "../utils/policies.js";

const router = Router();

router.post(
  "/register",
  handlePolicies(["public"]),
  sessionsController.register
);
router.post("/login", handlePolicies(["public"]), sessionsController.login);
router.get("/current", sessionsController.current);
router.get("/unprotectedLogin", sessionsController.unprotectedLogin);
router.get("/unprotectedCurrent", sessionsController.unprotectedCurrent);

export default router;
