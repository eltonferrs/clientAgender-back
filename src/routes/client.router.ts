import { Router} from "express";
import { clientController } from "../controllers";
import middleware from "../middleware";
import { clientCreatSchema, clientLoginSchema } from "../schemas";

export const clientRouter: Router = Router()

clientRouter.get('',clientController.list)
clientRouter.post('/login',middleware.validBody(clientLoginSchema), clientController.session)
clientRouter.post('',middleware.uniqueEmail,middleware.validBody(clientCreatSchema),clientController.create)