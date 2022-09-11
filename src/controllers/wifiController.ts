import { Request, Response } from "express";
import * as wifiService from '../services/wifiService'


const createWifi = async(req:Request, res:Response) =>{

    const {name, email, password} = req.body

    const result = await wifiService.createWifi({name, email, password})

    res.status(201).send(result)

}

const findWifi = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await wifiService.findWifi({email, password})

    res.status(200).send(result)

}

const deleteWifi = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await wifiService.deleteWifi({email, password})

    res.status(200).send(result)

}
export {createWifi, findWifi, deleteWifi}