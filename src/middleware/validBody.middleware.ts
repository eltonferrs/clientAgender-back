import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validBody = (schema: ZodTypeAny) => (req:Request, res:Response, next: NextFunction): void =>{
    req.body = schema.parse(req.body)

    return next()
}