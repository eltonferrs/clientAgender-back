import { z } from "zod";
import { Client } from "../entities";
import { Repository } from "typeorm";
import {
    clientCreatSchema, clientReadSchema,
    clientsReadSchema, clientLoginSchema, clientUpdateSchame
} from "../schemas";


type ClientCreate = z.infer< typeof clientCreatSchema>
type ClientRead = z.infer< typeof clientReadSchema>
type ClientsRead = z.infer< typeof clientsReadSchema>
type ClientUpdate = z.infer< typeof clientUpdateSchame>
type ClientLogin = z.infer< typeof clientLoginSchema>
type LoginResponse = {token: string}

type ClientRepo = Repository<Client>

export { 
    ClientCreate, ClientRead, ClientsRead, ClientUpdate, ClientLogin, LoginResponse,ClientRepo
}