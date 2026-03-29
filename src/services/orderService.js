import Order from "../models/Order.js";

export const createOrder = async (data, userId) => {
  const total = data.products.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

  return await Order.create({
    ...data,
    total,
    createdBy: userId
  });
};

export const getOrders = async () => {
  return await Order.find().populate("client");
};

export const updateOrderStatus = async (id, status) => {
  return await Order.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

export const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};