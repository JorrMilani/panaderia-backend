import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  businessName: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  location: {
    lat: Number,
    lng: Number
  },
  priority: {
    type: Number,
    default: 0
  },
  deliveryDays: [String], // ["lunes", "martes"]
  deliveryTime: String,   // "08:00 - 10:00"
  notes: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("Client", clientSchema);