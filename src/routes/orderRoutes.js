import { Router } from "express";
import * as orderController from "../controllers/orderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getOrders);
router.put("/:id", authMiddleware, orderController.updateOrderStatus);
router.delete("/:id", authMiddleware, orderController.deleteOrder);

export default router;