import { z } from "zod";
import { Contact } from "../entities";
import { Repository } from "typeorm";
import {
    contactCreatSchema, contactReadSchema,
    contactUpdateSchame, contactsReadSchema
} from "../schemas";


type contactCreate = z.infer< typeof contactCreatSchema>
type contactRead = z.infer< typeof contactReadSchema>
type contactsRead = z.infer< typeof contactsReadSchema>
type contactUpdate = z.infer< typeof contactUpdateSchame>

type ContactRepo = Repository<Contact>

export { 
    contactCreate, contactRead, contactsRead, contactUpdate,ContactRepo
}