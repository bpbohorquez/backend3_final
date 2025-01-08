import { Router } from "express";
import adoptionsController from "../controllers/adoptions.controller.js";
import { handlePolicies } from "../utils/policies.js";

const router = Router();

router.get(
  "/",
  handlePolicies(["admin", "user"]),
  adoptionsController.getAllAdoptions
);
router.get("/:aid", handlePolicies(["admin"]), adoptionsController.getAdoption);
router.post(
  "/:uid/:pid",
  handlePolicies(["admin"]),
  adoptionsController.createAdoption
);

export default router;
