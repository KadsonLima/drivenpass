import bcrypt from 'bcrypt';
import { NotesBody } from '../repositories/notesRepository';
import * as notesRepository from '../repositories/notesRepository';
import * as crypt from '../utils/cryptografy';


async function createNotes({content, title, userId}:NotesBody) {

    const contentCrypt = crypt.encryptPassword(content);
    const notesData = {
        content:contentCrypt,
        title,
        userId
        
    }

   return await notesRepository.createNotes(notesData)

}

async function findAllNotes(userId:number) {

   const allNotes = await notesRepository.findAllNotes(userId);

   for (const note in allNotes) {
    allNotes[note].content = (crypt.decryptPassword(allNotes[note].content))
   }

   return allNotes

}

async function findNotesById(userId:number, noteId:number) {

    const notes =  await notesRepository.findNotesById(userId, noteId);

    if(!notes) throw {code: 404}

    notes.content = (crypt.decryptPassword(notes.content))

    return notes
 
 }

 async function deleteNotes(userId:number, noteId:number) {

    const notes =  await notesRepository.deleteNotes(userId, noteId);

    if(notes.count === 0) throw {code:404}
    
    return notes
 
 }


export {createNotes, findAllNotes, findNotesById, deleteNotes}