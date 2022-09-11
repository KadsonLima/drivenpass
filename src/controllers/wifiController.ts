import { Request, Response } from "express";
import * as wifiService from '../services/wifiService'


const createWifi = async(req:Request, res:Response) =>{

    const {password, title, name} = req.body
    
    const userId = res.locals.user.userId
    const result = await wifiService.createWifi({password, title, name, userId})

    res.status(201).send(result)

}

const findAllWifi = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId

    const result = await wifiService.findAllWifi(userId)

    res.status(200).send(result)

}

const findWifiById = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const wifiId = Number(req.params.id)

    const result = await wifiService.findWifiById(userId, wifiId)

    res.status(200).send(result)

}

const deleteWifi = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const wifiId = Number(req.params.id)

    const result = await wifiService.deleteWifi(userId, wifiId)

    res.status(200).send(result)
}


export {createWifi, findAllWifi, findWifiById, deleteWifi}