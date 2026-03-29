import Client from "../models/Client.js";

export const createClient = async (data, userId) => {
  return await Client.create({
    ...data,
    createdBy: userId
  });
};

export const getClients = async () => {
  return await Client.find();
};

export const getClientById = async (id) => {
  return await Client.findById(id);
};

export const updateClient = async (id, data) => {
  return await Client.findByIdAndUpdate(id, data, { new: true });
};

export const deleteClient = async (id) => {
  return await Client.findByIdAndDelete(id);
};