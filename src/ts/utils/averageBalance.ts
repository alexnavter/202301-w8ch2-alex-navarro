import { clients } from "../data/data";
import { ClientStructure, type ClientsStructure } from "../data/types";

export const getClientsById = (clients: ClientsStructure) => {
  const result = clients.filter((client) => client.homePhone !== "");

  return result;
};
