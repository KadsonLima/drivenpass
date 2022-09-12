import { Request, Response } from "express";
import * as cardService from '../services/cardService'


const createCard = async(req:Request, res:Response) =>{

    const {holderName, 
        number, 
        password, 
        title, 
        cvv,
        expiryDate, 
        isVirtual,
        type} = req.body
    
    const userId = res.locals.user.userId
    const result = await cardService.createCard({holderName, 
        number, 
        password, 
        title, 
        cvv,
        expiryDate, 
        userId,
        isVirtual,
        type})

    res.status(201).send(result)

}

const findAllCard = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId

    const result = await cardService.findAllCard(userId)

    res.status(200).send(result)

}

const findCardById = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const cardId = Number(req.params.id)

    const result = await cardService.findCardById(userId, cardId)

    res.status(200).send(result)

}

const deleteCard = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const cardId = Number(req.params.id)

    const result = await cardService.deleteCard(userId, cardId)

    res.status(200).send(result)
}


export {createCard, findAllCard, findCardById, deleteCard}