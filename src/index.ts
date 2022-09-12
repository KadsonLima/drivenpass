import express,{ json } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from "./middlewares/erroHandlerMiddleware";
import 'express-async-errors';
import {router} from './routers/index'

dotenv.config();

const server = express();

server.use(cors());
server.use(json());
server.use(errorHandler);
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>{
    console.log("SERVER RODANDO NA PORTA: ", PORT)
})