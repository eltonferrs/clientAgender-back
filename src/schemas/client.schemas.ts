import { z } from "zod";

const clientSchema = z.object({
    id: z.string(),
    name: z.string().max(45,"maximum 45 characters"),
    email: z.string().email(),
    password: z.string(),
    cellphone: z.string(),
    started: z.string()
})

const clientCreatSchema = clientSchema.omit({
    id:true,started:true
})

const clientReadSchema = clientSchema.omit({
    password:true
})

const clientsReadSchema = z.array(clientReadSchema)

const clientLoginSchema = clientSchema.pick({
    emai:true, password:true
})

const clientUpdateSchame = clientCreatSchema.partial() 

export {
    clientSchema, clientCreatSchema, clientReadSchema,
    clientsReadSchema, clientLoginSchema, clientUpdateSchame
}