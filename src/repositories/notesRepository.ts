import internal from 'stream'
import {prisma} from '../database'

export interface NotesBody{
    title:string, 
    content:string, 
    userId:number
}


async function createNotes(body:NotesBody) {

    const verifyExistNotes = await prisma.note.findFirst({where:{title:body.title, userId:body.userId}})

    if(verifyExistNotes) throw {code:409, message:"there is already a note with this title"}

    return await prisma.note.create({
        data:body
    })
}

async function findAllNotes(userId:number) {

    return await prisma.note.findMany({
        where: {userId}
    })
}

async function findNotesById(userId:number, noteId:number) {

    return await prisma.note.findFirst({
        where: {userId, id:noteId}
    })
}

async function deleteNotes(userId:number, noteId:number) {

    return await prisma.note.deleteMany({
        where: {id:noteId, userId:userId}
    })
}

export {createNotes,findAllNotes, findNotesById, deleteNotes}