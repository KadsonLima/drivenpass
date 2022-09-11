import { Request, Response } from "express";
import * as credentialService from '../services/credentialService'


const createCredential = async(req:Request, res:Response) =>{

    const {url, userName, password, title, name, label} = req.body
    
    const userId = res.locals.user.userId
    const result = await credentialService.createCredential({url, userName, password, title, name, label, userId})

    res.status(201).send(result)

}

const findAllCredential = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId

    const result = await credentialService.findAllCredential(userId)

    res.status(200).send(result)

}

const findCredentialById = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const credentialId = Number(req.params.id)

    const result = await credentialService.findCredentialById(userId, credentialId)

    res.status(200).send(result)

}

const deleteCredential = async(req:Request, res:Response) =>{

    const userId = res.locals.user.userId
    const credentialId = Number(req.params.id)

    const result = await credentialService.deleteCredential(userId, credentialId)

    res.status(200).send(result)
}


export {createCredential, findAllCredential, findCredentialById, deleteCredential}