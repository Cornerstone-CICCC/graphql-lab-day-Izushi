import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  productId: { type: String, required: true },
  customerId: { type: String, required: true },
})

export const Order = mongoose.model("Order", OrderSchema);