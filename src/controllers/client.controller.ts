import { Request, Response } from "express";
import { clientServices } from "../services";
import { ClientRead } from "../interfaces";

const create = async (req:Request, res:Response): Promise<Response> =>{
    const client: ClientRead = await clientServices.create(req.body)
    return res.status(201).json(client)
}

const list = async (req:Request, res:Response): Promise<Response> =>{
    return res.status(200).json( await clientServices.list())
}

const session =async (req:Request, res:Response): Promise<Response> => {
    return res.status(200).json(await clientServices.session(req.body))
}

const update = async (req:Request, res:Response): Promise<Response> =>{
    const clientInfo = res.locals.client
    const client: ClientRead = await clientServices.update(req.body,clientInfo)
    return res.status(200).json(client)
}

const remove = async (req:Request, res:Response):Promise<Response> =>{
    await clientServices.remove(res.locals.client)
    return res.status(204).json()
}

export default {create, list, session, update, remove }