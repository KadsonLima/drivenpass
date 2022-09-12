import { type } from 'os'
import internal from 'stream'
import {prisma} from '../database'

export interface CardBody{
    holderName:string, 
    cvv:string, 
    number:string, 
    password:string, 
    title:string, 
    expiryDate:string, 
    userId:number,
    type:CardTypes,
    isVirtual:boolean
}

type CardTypes = 'credit' | 'debit' | 'credit_debit'

export type SignInBody = Omit<CardBody, "name">

async function createCard(body:CardBody) {

    const verifyExistCard = await prisma.card.findFirst({where:{title:body.title, userId:body.userId}})

    if(verifyExistCard) throw {code:409, message:"there is already a card with this title"}

    return await prisma.card.create({
        data:body
    })
}

async function findAllCard(userId:number) {

    return await prisma.card.findMany({
        where: {userId}
    })
}

async function findCardById(userId:number, cardId:number) {

    return await prisma.card.findFirst({
        where: {userId, id:cardId}
    })
}

async function deleteCard(userId:number, cardId:number) {

    return await prisma.card.deleteMany({
        where: {id:cardId, userId:userId}
    })
}

export {createCard,findAllCard, findCardById, deleteCard}