import Order from "../models/Order.js";
import { optimizeRoute } from "../utils/routeOptimizer.js";

export const getOptimizedRoute = async () => {
  const orders = await Order.find({ status: "pendiente" })
    .populate("client");

  const optimized = optimizeRoute(orders);

  return optimized;
};