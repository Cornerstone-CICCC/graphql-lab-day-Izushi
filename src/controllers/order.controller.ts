import { Order } from "../models/order.model"
import IOrder from "../types/order"

const getOrders = async () => {
  const orders = await Order.find()
  return orders
}

const createOrder = async (productId: string, customerId: string) => {
  const order = new Order({ productId, customerId })
  await order.save()
  return order
}

const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, { new: true })
}

const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id)
}

export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
}