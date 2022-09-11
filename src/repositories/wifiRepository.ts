import internal from 'stream'
import {prisma} from '../database'

export interface WifiBody{
    password:string, 
    title:string, 
    name:string, 
    userId:number
}


async function createWifi(body:WifiBody) {

    const verifyExistWifi = await prisma.wifi.findFirst({where:{title:body.title, userId:body.userId}})

    if(verifyExistWifi) throw {code:409, message:"there is already a wifi with this title"}

    return await prisma.wifi.create({
        data:body
    })
}

async function findAllWifi(userId:number) {

    return await prisma.wifi.findMany({
        where: {userId}
    })
}

async function findWifiById(userId:number, wifiId:number) {

    return await prisma.wifi.findFirst({
        where: {userId, id:wifiId}
    })
}

async function deleteWifi(userId:number, wifiId:number) {

    return await prisma.wifi.deleteMany({
        where: {id:wifiId, userId:userId}
    })
}

export {createWifi,findAllWifi, findWifiById, deleteWifi}