import bcrypt from 'bcrypt';
import { WifiBody } from '../repositories/wifiRepository';
import * as wifiRepository from '../repositories/wifiRepository';
import * as crypt from '../utils/cryptografy';


async function createWifi({ password, title, name, userId}:WifiBody) {

    const passwordCrypt = crypt.encryptPassword(password);
    const credentialData = {

        password:passwordCrypt,
        title,
        name,
        userId
        
    }

   return await wifiRepository.createWifi(credentialData)

}

async function findAllWifi(userId:number) {

   const credentials = await wifiRepository.findAllWifi(userId);

   for (const wifi in credentials) {
    credentials[wifi].password = (crypt.decryptPassword(credentials[wifi].password))
   }

   return credentials

}

async function findWifiById(userId:number, credentialId:number) {

    const wifi =  await wifiRepository.findWifiById(userId, credentialId);

    if(!wifi) throw {code: 404}

    wifi.password = (crypt.decryptPassword(wifi.password))

    return wifi
 
 }

 async function deleteWifi(userId:number, credentialId:number) {

    const wifi =  await wifiRepository.deleteWifi(userId, credentialId);

    if(wifi.count === 0) throw {code:404}
    
    return wifi
 
 }


export {createWifi, findAllWifi, findWifiById, deleteWifi}