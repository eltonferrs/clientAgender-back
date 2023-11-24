import { Client, Contact } from "../entities"
import { AppError } from "../errors"
import { contactCreate, contactRead, contactsRead } from "../interfaces"
import { clientRepository, contactRepository } from "../repositories"
import { contactsReadSchema, contactReadSchema} from "../schemas"

const create = async (order:contactCreate, client:Client): Promise<contactRead> =>{
    const contact: Contact = contactRepository.create({...order,client:client})
    await contactRepository.save(contact)
    return contactReadSchema.parse(contact)
}

const list =async (client:Client):Promise<contactsRead> => {
    return contactsReadSchema.parse(await contactRepository.findBy({client:{...client}}))
}

export default { create, list}