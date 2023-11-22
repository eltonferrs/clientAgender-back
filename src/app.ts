import "reflect-metadata";
import "express-async-errors";
import express, { Application} from "express"
import { clientRouter } from "./routes";

const app: Application = express();
app.use(express.json())

app.use('/clients',clientRouter)

export default app