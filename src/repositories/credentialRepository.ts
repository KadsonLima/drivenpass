import internal from 'stream'
import {prisma} from '../database'

export interface credentialBody{
    url:string, 
    userName:string, 
    password:string, 
    title:string, 
    name:string, 
    userId:number,
    label:string
}

export type SignInBody = Omit<credentialBody, "name">

async function createCredential(body:credentialBody) {

    const verifyExistCredential = await prisma.credential.findFirst({where:{title:body.title, userId:body.userId}})

    if(verifyExistCredential) throw {code:409, message:"there is already a credential with this title"}

    return await prisma.credential.create({
        data:body
    })
}

async function findAllCredential(userId:number) {

    return await prisma.credential.findMany({
        where: {userId}
    })
}

async function findCredentialById(userId:number, credentialId:number) {

    return await prisma.credential.findFirst({
        where: {userId, id:credentialId}
    })
}

async function deleteCredential(userId:number, credentialId:number) {

    return await prisma.credential.deleteMany({
        where: {id:credentialId, userId:userId}
    })
}

export {createCredential,findAllCredential, findCredentialById, deleteCredential}