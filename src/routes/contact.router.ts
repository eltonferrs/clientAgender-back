import { Router } from "express";
import middleware from "../middleware";
import { contactCreatSchema, contactUpdateSchame } from "../schemas";
import { contactController } from "../controllers";

export const contactRouter:Router = Router()

contactRouter.use(middleware.validToken)
contactRouter.get('',contactController.list)
contactRouter.get('/:contactid',middleware.verifyContact,contactController.retrive)
contactRouter.post('',middleware.validBody(contactCreatSchema),contactController.create)
contactRouter.patch('/:contactid',middleware.validBody(contactUpdateSchame),middleware.verifyContact,contactController.update)
contactRouter.delete('/:contactid',middleware.verifyContact,contactController.remove)