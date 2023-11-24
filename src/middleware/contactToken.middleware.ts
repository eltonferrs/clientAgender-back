import { Request, Response, NextFunction } from "express";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";
import { Contact } from "../entities";

export const verifyContact = async (req:Request,res:Response,next:NextFunction): Promise<void> =>{
    const id = req.params.contactid
    if(!id) throw new AppError("Contact not found", 404)
    const contact: Contact|null = await contactRepository.findOneBy({id:id})
    if(!contact) throw new AppError("Contact not found", 404)
    res.locals = {...res.locals,contact}
    
    const currentClient = res.locals.clientId
    if(currentClient === contact.client.id) return next()

    throw new AppError("Insufficient permission", 403)
}