import { Request, Response } from "express";
import { clientServices } from "../services";
import { ClientRead } from "../interfaces";

const create = async (req:Request, res:Response): Promise<Response> =>{
    const client: ClientRead = await clientServices.create(req.body)
    return res.status(201).json(client)
}

export default {create}