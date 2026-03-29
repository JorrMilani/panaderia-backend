import { Router } from "express";
import * as clientController from "../controllers/clientController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, clientController.createClient);
router.get("/", authMiddleware, clientController.getClients);
router.put("/:id", authMiddleware, clientController.updateClient);
router.delete("/:id", authMiddleware, clientController.deleteClient);

export default router;