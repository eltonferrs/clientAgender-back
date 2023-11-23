import { Router} from "express";
import { clientController } from "../controllers";
import middleware from "../middleware";
import { clientCreatSchema, clientLoginSchema, clientUpdateSchame } from "../schemas";

export const clientRouter: Router = Router()

clientRouter.get('',clientController.list)
clientRouter.post('/login',middleware.validBody(clientLoginSchema), clientController.session)
clientRouter.use(middleware.uniqueEmail)
clientRouter.post('',middleware.validBody(clientCreatSchema),clientController.create)

clientRouter.use(middleware.validToken)
clientRouter.patch('/:id',middleware.verify,middleware.validBody(clientUpdateSchame), clientController.update)
clientRouter.delete('/:id',middleware.verify,clientController.remove)
