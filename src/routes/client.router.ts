import { Router} from "express";
import { clientController } from "../controllers";
import middleware from "../middleware";
import { clientCreatSchema } from "../schemas";

export const clientRouter: Router = Router()

clientRouter.post('',middleware.validBody(clientCreatSchema),clientController.create)