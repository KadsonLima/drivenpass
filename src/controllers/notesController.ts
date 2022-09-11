import { Request, Response } from "express";
import * as notesService from '../services/notesService'


const createNotes = async(req:Request, res:Response) =>{

    const {name, email, password} = req.body

    const result = await notesService.createNotes({name, email, password})

    res.status(201).send(result)

}

const findNotes = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await notesService.findNotes({email, password})

    res.status(200).send(result)

}

const deleteNotes = async(req:Request, res:Response) =>{

    const {email, password} = req.body

    const result = await notesService.deleteNotes({email, password})

    res.status(200).send(result)

}
export {createNotes, findNotes, deleteNotes}