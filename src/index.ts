import express,{ json } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';
import errorHandler from "./middlewares/erroHandlerMiddleware";
import {router} from './routers/index'

dotenv.config();

const server = express();

server.use(cors());
server.use(json());
server.use(router);
server.use(errorHandler);


const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>{
    console.log("SERVER RODANDO NA PORTA: ", PORT)
})