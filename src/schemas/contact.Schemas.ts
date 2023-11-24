import { z } from "zod";

const contactSchema = z.object({
    id: z.string(),
    name: z.string().max(45,"maximum 45 characters"),
    email: z.string().email(),
    cellphone: z.string(),
    registered: z.string(),
    client: z.string()
})

const contactCreatSchema = contactSchema.omit({
    id:true,registered:true,client:true
})
const contactReadSchema = z.object({
    id: z.string(),
    name: z.string().max(45,"maximum 45 characters"),
    email: z.string().email(),
    cellphone: z.string(),
    registered: z.string(),
    client: z.object({id: z.string()})
})

const contactsReadSchema = z.array(contactSchema.omit({client:true}))

const contactUpdateSchame = contactCreatSchema.partial() 

export {
    contactSchema, contactCreatSchema,contactReadSchema,
    contactsReadSchema, contactUpdateSchame
}