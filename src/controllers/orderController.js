import * as orderService from "../services/orderService.js";

export const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body, req.user.id);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.json({ message: "Pedido eliminado" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};