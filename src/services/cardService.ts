import bcrypt from 'bcrypt';
import { credentialBody } from '../repositories/credentialRepository';
import * as credentialRepository from '../repositories/credentialRepository';
import * as crypt from '../utils/cryptografy';


async function createCredential({url, userName, password, title, name, label, userId}:credentialBody) {

    const passwordCrypt = crypt.encryptPassword(password);
    const credentialData = {
        url,
        userName,
        password:passwordCrypt,
        title,
        name,
        label,
        userId
        
    }

   return await credentialRepository.createCredential(credentialData)

}

async function findAllCredential(userId:number) {

   const credentials = await credentialRepository.findAllCredential(userId);

   for (const credential in credentials) {
    credentials[credential].password = (crypt.decryptPassword(credentials[credential].password))
   }

   return credentials

}

async function findCredentialById(userId:number, credentialId:number) {

    const credential =  await credentialRepository.findCredentialById(userId, credentialId);

    if(!credential) throw {code: 404}

    credential.password = (crypt.decryptPassword(credential.password))

    return credential
 
 }

 async function deleteCredential(userId:number, credentialId:number) {

    const credential =  await credentialRepository.deleteCredential(userId, credentialId);

    if(credential.count === 0) throw {code:404}
    
    return credential
 
 }


export {createCredential, findAllCredential, findCredentialById, deleteCredential}