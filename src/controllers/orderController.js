import Order from "../models/Order.js";

// 🔥 CREAR PEDIDO
export const createOrder = async (req, res) => {
  try {
    const { client, products } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({
        message: "Debe haber al menos un producto",
      });
    }

    const total = products.reduce(
      (acc, p) => acc + p.quantity * p.price,
      0
    );

    const order = new Order({
      client,
      products,
      total,
    });

    await order.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 OBTENER PEDIDOS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("client");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 ACTUALIZAR ESTADO
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndUpdate(
      id,
      { status: "ENTREGADO" },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};