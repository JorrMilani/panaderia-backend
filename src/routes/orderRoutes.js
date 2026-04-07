import express from "express";
const router = express.Router();

import {
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

// ✅ CREAR PEDIDO
router.post("/", createOrder);

// ✅ OBTENER PEDIDOS
router.get("/", getOrders);

// ✅ MARCAR COMO ENTREGADO
router.put("/:id/status", updateOrderStatus);

export default router;