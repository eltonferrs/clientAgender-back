import { Client, Contact } from "../entities"
import { contactCreate, contactRead, contactUpdate, contactsRead } from "../interfaces"
import { contactRepository } from "../repositories"
import { contactsReadSchema, contactReadSchema} from "../schemas"

const create = async (order:contactCreate, client:Client): Promise<contactRead> =>{
    const contact: Contact = contactRepository.create({...order,client:client})
    await contactRepository.save(contact)
    return contactReadSchema.parse(contact)
}

const list = async (client:Client):Promise<contactsRead> => {
    return contactsReadSchema.parse(await contactRepository.findBy({client:{...client}}))
}

const retrive = async (client:Client,contactId:string):Promise<contactsRead> => {
    return contactsReadSchema.parse(await contactRepository.findBy({id:contactId}))
}

const update = async (infoContact:contactCreate,order:contactUpdate):Promise<contactRead> => {
    const contact:Contact = contactRepository.create({...order,...infoContact})
    await contactRepository.save(contact)
    return contactReadSchema.parse(contact)
}

const remove =async (contact:Contact): Promise<void> => {
    await contactRepository.remove(contact)
}

export default { create, list, update, remove, retrive }