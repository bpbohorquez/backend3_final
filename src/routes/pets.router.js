import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import uploader from "../utils/uploader.js";
import { handlePolicies } from "../utils/policies.js";

const router = Router();

router.get(
  "/",
  handlePolicies(["admin", "user", "public"]),
  petsController.getAllPets
);
router.post("/", handlePolicies(["admin"]), petsController.createPet);
router.post(
  "/withimage",
  handlePolicies(["admin"]),
  uploader.single("image"),
  petsController.createPetWithImage
);
router.put("/:pid", handlePolicies(["admin"]), petsController.updatePet);
router.delete("/:pid", handlePolicies(["admin"]), petsController.deletePet);

export default router;
