import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";
import { Client } from "../entities";
import { clientRepository } from "../repositories";

export const validToken = async (req:Request, res:Response, next: NextFunction): Promise<void> =>{
    const token: string | undefined = req.headers.authorization
    if(!token) throw new AppError("Missing bearer token", 401)

    const codeToken: string =  token.split(" ")[1]
    verify(codeToken,process.env.SECRET_KEY!,
        (error:any, infoClient:any) =>{
            if(error){
                throw new AppError(error.message,401)
            }
            res.locals.clientId = infoClient.sub
        }
        )
    const client: Client|null = await clientRepository.findOneBy({id:res.locals.clientId})
    if(!client) throw new AppError("Client not found", 404)
    res.locals = {...res.locals,client}
    return next()
}