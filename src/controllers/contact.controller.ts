import { Request, Response } from "express";
import { contactServevices } from "../services";
import { contactRead } from "../interfaces";

const create =async (req:Request, res: Response): Promise<Response> => {
    const client = res.locals.client
    const contact: contactRead = await contactServevices.create(req.body,client)
    return res.status(201).json(contact)
}

const list = async (req:Request, res: Response): Promise<Response> =>{
    return res.status(200).json( await contactServevices.list(res.locals.client))
}

export default { create, list}