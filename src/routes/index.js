import { Router } from "express";
import authRoutes from "./authRoutes.js";
import testRoutes from "./testRoutes.js";
import clientRoutes from "./clientRoutes.js";
import orderRoutes from "./orderRoutes.js";
import routeRoutes from "./routeRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/test", testRoutes);
router.use("/clients", clientRoutes);
router.use("/orders", orderRoutes);
router.use("/routes", routeRoutes);

export default router;