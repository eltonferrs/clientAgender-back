import { Router } from "express";
import middleware from "../middleware";
import { contactCreatSchema } from "../schemas";
import { contactController } from "../controllers";

export const contactRouter:Router = Router()

contactRouter.use(middleware.validToken)
contactRouter.get('',contactController.list)
contactRouter.post('',middleware.validBody(contactCreatSchema),contactController.create)