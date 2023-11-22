import { Router} from "express";
import { clientController } from "../controllers";

export const clientRouter: Router = Router()

clientRouter.post('',clientController.create)