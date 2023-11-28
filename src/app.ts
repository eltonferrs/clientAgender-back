import "reflect-metadata";
import "express-async-errors";
import express, { Application} from "express"
import { clientRouter, contactRouter } from "./routes";
import middleware from "./middleware";
import cors from 'cors'

const app: Application = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use('/clients',clientRouter)
app.use('/contact',contactRouter)

app.use(middleware.handleErrors)
export default app