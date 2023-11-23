import { Client } from "../entities"
import { AppError } from "../errors"
import { clientRepository } from "../repositories"
import { Request, Response, NextFunction } from "express"

export const uniqueEmail = async (req:Request,res: Response, next: NextFunction): Promise<void> =>{
    if(!req.body.email) return next()
    
    const currentClient: Client | null = await clientRepository.findOneBy({email: req.body.email})

    if(currentClient) throw new AppError("Email already existy",409)

    return next()
}