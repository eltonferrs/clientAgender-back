import { AppDataSource } from "./data-source";
import { ClientRepo } from "./interfaces";
import { Client } from "./entities";

const clientRepository: ClientRepo = AppDataSource.getRepository(Client)

export {clientRepository}