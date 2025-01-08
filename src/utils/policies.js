import { createHash, passwordValidation } from "./utils/index.js";
import jwt from "jsonwebtoken";

export const handlePolicies = (policies) => {
  return (req, res, next) => {
    if (policies.includes("public")) {
      next();
    } else {
      const token = req.cookies["coderCookie"];
      if (!token) {
        return res
          .status(401)
          .json({ message: "Token no ha sido proporcionado" });
      }

      try {
        const user = jwt.verify(token, "tokenSecretJWT");
        if (policies.includes(user.role)) {
          next();
        } else {
          return res
            .status(403)
            .json({ message: "Acceso denegado por politicas insuficientes" });
        }
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Token de autorizacion inválido" });
      }
    }
  };
};
