import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true
  },
  products: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  status: {
    type: String,
    enum: ["pendiente", "preparacion", "reparto", "entregado"],
    default: "pendiente"
  },
  deliveryDate: Date,
  notes: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);