import { Customer } from "../models/customer.model"
import ICustomer from "../types/customer"

const getCustomers = async () => {
  const customers = await Customer.find()
  return customers
}

const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
  const customer = new Customer(data)
  await customer.save()
  return customer
}

const getCustomerById = async (id: string) => {
  return await Customer.findById(id)
}

const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
  return await Customer.findByIdAndUpdate(id, data, { new: true })
}

const deleteCustomer = async (id: string) => {
  return await Customer.findByIdAndDelete(id)
}

export default {
  getCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer
}