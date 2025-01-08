import { Router } from "express";
import usersController from "../controllers/users.controller.js";
import { handlePolicies } from "../utils/policies.js";

const router = Router();

router.get("/", handlePolicies(["admin"]), usersController.getAllUsers);

router.get("/:uid", handlePolicies(["admin"]), usersController.getUser);
router.put("/:uid", handlePolicies(["admin"]), usersController.updateUser);
router.delete("/:uid", handlePolicies(["admin"]), usersController.deleteUser);

export default router;
