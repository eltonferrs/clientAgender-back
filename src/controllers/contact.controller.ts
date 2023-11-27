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

const retrive = async (req:Request, res: Response): Promise<Response> =>{
    console.log(req.params.contactid)
    return res.status(200).json( await contactServevices.retrive(res.locals.client,req.params.contactid))
}

const update =  async (req:Request, res:Response): Promise<Response> =>{
    const contactInfo = res.locals.contact
    const contact: contactRead = await contactServevices.update(req.body,contactInfo)
    return res.status(200).json(contact)
}

const remove = async (req:Request, res:Response):Promise<Response> =>{
    await contactServevices.remove(res.locals.contact)
    return res.status(204).json()
}

export default { create, list, update, remove, retrive}