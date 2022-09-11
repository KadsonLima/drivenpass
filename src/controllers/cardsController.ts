import { Request, Response } from "express";
import * as cardService from '../services/cardService'


const createCard = async(req:Request, res:Response) =>{

    const {name, email, password} = req.body

    const result = await cardService.createCard({name, email, password})

    res.status(201).send(result)

}

const findCard = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await cardService.findCard({email, password})

    res.status(200).send(result)

}

const deleteCard = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await cardService.deleteCard({email, password})

    res.status(200).send(result)

}
export {createCard, findCard, deleteCard}