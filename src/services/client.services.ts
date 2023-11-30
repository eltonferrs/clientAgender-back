import { ClientCreate, ClientLogin, ClientRead, ClientUpdate, ClientsRead, LoginResponse } from "../interfaces"
import { clientReadSchema, clientsReadSchema } from "../schemas"
import { clientRepository } from "../repositories"
import { AppError } from "../errors"
import { compare } from "bcryptjs"
import { Client } from "../entities"
import { sign } from "jsonwebtoken"

const create =async (order:ClientCreate): Promise<ClientRead> => {
  const newClient:Client = clientRepository.create(order)
  await clientRepository.save(newClient)
  return clientReadSchema.parse(newClient)
}

const get = async (clientId:string): Promise<ClientRead> =>{
  return clientReadSchema.parse(await clientRepository.findOneBy({id:clientId}))
}

const list = async (): Promise<ClientsRead> =>{
  return clientsReadSchema.parse(await clientRepository.find())
}

const session =async (order:ClientLogin):Promise<LoginResponse> => {
  const client: Client | null = await clientRepository.findOneBy({email:order.email})
  if(!client) throw new AppError("Invalid credentials", 401)
  const password: boolean = await compare(order.password, client.password)
  if(!password) throw new AppError("Invalid credentials", 401)

  const token: string = sign({},String(process.env.SECRET_KEY)!,{subject:client.id,expiresIn: process.env.EXPIRES_IN!})
  return {token}
}

const update = async (infoClient:ClientCreate,order:ClientUpdate):Promise<ClientRead> => {
  const client:Client = clientRepository.create({...order,...infoClient})
  await clientRepository.save(client)
  return clientReadSchema.parse(client)
}

const remove =async (client:Client): Promise<void> => {
  await clientRepository.remove(client)
}


export default { create, get, list, session, update, remove }