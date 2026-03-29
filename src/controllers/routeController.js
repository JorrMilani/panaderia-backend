import * as routeService from "../services/routeService.js";

export const getRoute = async (req, res) => {
  try {
    const route = await routeService.getOptimizedRoute();
    res.json(route);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};