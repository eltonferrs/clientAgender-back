import { Request, Response, NextFunction } from "express";
import { clientRepository } from "../repositories";
import { AppError } from "../errors";
import { Client } from "../entities";

export const verify = async (req:Request,res:Response,next:NextFunction): Promise<void> =>{
    const id = req.params.id
    if(!id) throw new AppError("Client not found", 404)
    const client: Client|null = await clientRepository.findOneBy({id:id})
    if(!client) throw new AppError("Client not found", 404)
    
    const currentClient = res.locals.clientId
    if(currentClient === client.id) return next()

    throw new AppError("Insufficient permission", 403)
}