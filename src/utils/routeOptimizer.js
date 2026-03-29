export const optimizeRoute = (orders) => {
  return orders.sort((a, b) => {
    // 1. Prioridad del cliente
    const priorityA = a.client.priority || 0;
    const priorityB = b.client.priority || 0;

    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    // 2. Horario de entrega
    const timeA = new Date(a.deliveryDate);
    const timeB = new Date(b.deliveryDate);

    return timeA - timeB;
  });
};