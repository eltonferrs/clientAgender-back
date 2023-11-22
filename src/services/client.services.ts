import { Client } from "../entities"
import { clientRepository } from "../repositories"
import { ClientCreate, ClientRead } from "../interfaces"
import { clientReadSchema } from "../schemas"

const create =async (order:ClientCreate): Promise<ClientRead> => {
  const newClient:Client = clientRepository.create(order)
  await clientRepository.save(newClient)
  return clientReadSchema.parse(newClient)
}

export default { create }