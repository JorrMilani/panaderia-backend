import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    products: [
      {
        product: String,
        quantity: Number,
        price: Number,
      },
    ],
    total: Number,

    // 🔥 NUEVO
    status: {
      type: String,
      enum: ["PENDIENTE", "ENTREGADO"],
      default: "PENDIENTE",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);