import { AppDataSource } from "./data-source";
import { ClientRepo, ContactRepo } from "./interfaces";
import { Client, Contact } from "./entities";

const clientRepository: ClientRepo = AppDataSource.getRepository(Client)

const contactRepository: ContactRepo = AppDataSource.getRepository(Contact)

export {clientRepository, contactRepository}