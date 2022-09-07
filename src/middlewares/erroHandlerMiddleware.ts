import {Request, Response, NextFunction} from 'express';

export default async function errorHandler(error:any, req:Request, res:Response, _:NextFunction) {
    console.log(error);
    if(error.code){
        return res.status(error.code).send(error.message);
    }

    res.sendStatus(500);
}