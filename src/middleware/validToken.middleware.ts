import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";

export const validToken = (req:Request, res:Response, next: NextFunction): void =>{
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
    return next()
}