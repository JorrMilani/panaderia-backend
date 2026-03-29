import { Router } from "express";
import { getRoute } from "../controllers/routeController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, getRoute);

export default router;