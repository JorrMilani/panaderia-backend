import * as clientService from "../services/clientService.js";

export const createClient = async (req, res) => {
  try {
    const client = await clientService.createClient(req.body, req.user.id);
    res.json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.json(clients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await clientService.updateClient(req.params.id, req.body);
    res.json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    await clientService.deleteClient(req.params.id);
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};