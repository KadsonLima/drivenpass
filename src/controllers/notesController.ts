import { Request, Response } from "express";
import * as noteService from '../services/noteService'


const createNotes = async(req:Request, res:Response) =>{

    const {title, content} = req.body
    
    const userId = res.locals.user.userId
    const result = await noteService.createNotes({title, content, userId})

    res.status(201).send(result)

}

const findAllNotes = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId

    const result = await noteService.findAllNotes(userId)

    res.status(200).send(result)

}

const findNotesById = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const noteId = Number(req.params.id)

    const result = await noteService.findNotesById(userId, noteId)

    res.status(200).send(result)

}

const deleteNotes = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const noteId = Number(req.params.id)

    const result = await noteService.deleteNotes(userId, noteId)

    res.status(200).send(result)
}


export {createNotes, findAllNotes, findNotesById, deleteNotes}