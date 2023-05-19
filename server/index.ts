import cookieParser from 'cookie-parser';
import express, {Express} from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import  routes  from './routes';
import morgan from "morgan";

createConnection().then(() => {
    const app: Express = express();
    const port = 7000;
    app.use(express.json());
    app.use(morgan("dev"))
    app.use(cookieParser());
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
        credentials: true
    }));

    app.use('/api', routes);
    app.get("/", (req, res) => {
        res.send("hh")
    })

    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    })
})



