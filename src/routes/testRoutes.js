import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/private", authMiddleware, (req, res) => {
  res.json({
    message: "Accediste a ruta privada",
    user: req.user
  });
});

export default router;